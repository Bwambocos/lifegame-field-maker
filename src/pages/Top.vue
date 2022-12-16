<template>
	<main>
		<div class="wrapper">
			<div v-for="i in size" :key="i" class="row">
				<div v-for="j in size" :key="j" @click="set(i, j)">
					<div v-if="check(i, j)" class="box fill"></div>
					<div v-else class="box"></div>
				</div>
			</div>
			<div class="buttons">
				<button type="button" @click="add()">+</button>
				<button type="button" @click="sub()">-</button>
			</div>
			<button type="button" @click="reset()">リセット</button>
			<div class="output">
				<textarea :cols="size * 2 + 2" :rows="size" v-model="output"></textarea>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			size: 8,
			field: [[]],
		};
	},

	created() {
		let flag = false;
		if (window.localStorage) {
			this.size = Number(localStorage.getItem("size"));
			let json = localStorage.getItem("field");
			if (json != undefined) {
				const array = JSON.parse(json);
				if (array.length == this.size) {
					this.field = array;
					flag = true;
				}
			}
		}
		if (!flag) {
			this.field = Array(this.size);
			for (let i = 0; i < this.size; ++i) {
				this.field[i] = Array(this.size);
				this.field[i].fill(0);
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
				localStorage.setItem("size", this.size.toString());
			}
		},

		add() {
			this.size++;
			this.reset();
		},

		sub() {
			if (this.size > 1) {
				this.size--;
				this.reset();
			}
		},

		reset() {
			this.field = Array(this.size);
			for (let i = 0; i < this.size; ++i) {
				this.field[i] = Array(this.size);
				this.field[i].fill(0);
			}
		},
	},

	computed: {
		output() {
			let res = "[";
			for (let i = 0; i < this.size; ++i) {
				res += "[" + this.field[i].join(",") + "]";
				if (i < this.size - 1) {
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
	margin: 1.5vh 1vw;
}
</style>
