<template>
	<div id="app">
		<div class="maintitle"></div>
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
		position: relative;
	}
	.maintitle{
		height: 50px;
		width: 100%;
		background: #42b983;
		-webkit-app-region: drag;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
