<template>
	<div class="time-holder"></div>
</template>

<script>
	import moment from 'moment'
    export default {
        name: "Time",
		mounted(){
            console.log(moment())
		}
    }
</script>

<style scoped lang="scss">

</style>
