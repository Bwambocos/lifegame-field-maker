<template>
	<div id="app">
		<Header />
		<Top />
		<Footer />
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Top from "./pages/Top.vue";
export default {
	components: {
		Header,
		Footer,
		Top,
	},
};
</script>

<style>
body {
	margin: 0;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
