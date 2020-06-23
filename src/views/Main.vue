<template>
	<div class="main">
		<Time></Time>
	</div>
</template>

<script>
	import Time from '@/components/common/Time'
    export default {
        name: "Main",
		components:{Time}
    }
</script>

<style scoped lang="scss">
.main{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.3);
	border-radius: 5px;
	border: 1px solid rgba(255,255,255,.16);
	overflow: hidden;
	padding: 15px;
}
</style>
