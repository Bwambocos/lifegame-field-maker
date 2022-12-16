<template>
	<footer>
		<div>
			<p>{{ msg }}</p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			msg: "バグ等あったら教えてください",
		};
	},
};
</script>

<style scoped>
footer {
	background: #dcdcdc;
	padding: 0.5em 0;
}
</style>
