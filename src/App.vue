<template>
	<div id="app">
		<div class="xixi">123</div>
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
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
