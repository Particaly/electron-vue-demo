<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        name: 'App',
		mounted() {
            this.$ipcRenderer.send('msg','windowReady','123');
            console.log(process.env);
        }
    }
</script>

<style lang="scss">
	#app,html,body {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		width: 100%;
		height: 100%;
	}
</style>
