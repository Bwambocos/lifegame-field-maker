<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
export default {
	data() {
		return {
			title: "ライフゲームの課題で少し役に立つかもしれないもの",
		};
	},
};
</script>

<style scoped>
header {
	padding: 1em 0;
	background: #778899;
}

h1 {
	margin: 0;
	color: #fff;
}
</style>
