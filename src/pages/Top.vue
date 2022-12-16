<template>
	<main>
		<div class="wrapper">
			<div v-for="i in rows" :key="i" class="row">
				<div v-for="j in columns" :key="j" @click="set(i, j)">
					<div v-if="check(i, j)" class="box fill"></div>
					<div v-else class="box"></div>
				</div>
			</div>
			<button type="button" @click="reset()">リセット</button>
			<div class="output">
				<textarea cols="35" rows="16" v-model="output"></textarea>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			rows: 16,
			columns: 16,
			field: [[]],
		};
	},

	created() {
		this.field = Array(this.rows);
		for (let i = 0; i < this.rows; ++i) {
			this.field[i] = Array(this.columns);
			this.field[i].fill(0);
		}
		if (window.localStorage) {
			let json = localStorage.getItem("field");
			if (json != undefined) {
				this.field = JSON.parse(json);
			}
		}
	},

	methods: {
		set(r, c) {
			this.field[r - 1][c - 1] = (this.field[r - 1][c - 1] + 1) % 2;
			this.save();
		},

		check(r, c) {
			return this.field[r - 1][c - 1] == 1;
		},

		save() {
			if (window.localStorage) {
				let json = JSON.stringify(this.field, undefined, 1);
				localStorage.setItem("field", json);
			}
		},

		reset() {
			this.field = Array(this.rows);
			for (let i = 0; i < this.rows; ++i) {
				this.field[i] = Array(this.columns);
				this.field[i].fill(0);
			}
		},
	},

	computed: {
		output() {
			let res = "[";
			for (let i = 0; i < this.rows; ++i) {
				res += "[" + this.field[i].join(",") + "]";
				if (i < this.rows - 1) {
					res += ",";
				}
			}
			res += "]";
			return res;
		},
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 5vh 0;
}

.row {
	display: flex;
}

.box {
	width: 2em;
	height: 2em;
	margin: 0;
	border: 1px solid black;
}

.fill {
	background-color: black;
}

button {
	margin: 2vh 0;
}
</style>
