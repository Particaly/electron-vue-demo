<template>
	<div class="main">
		<div class="blocks-time border">
			<Time></Time>
		</div>
		<div class="block-date border">
			<Date></Date>
		</div>
	</div>
</template>

<script>
	import Time from '@/components/common/Time'
	import Date from "@/components/Main/Date";
    export default {
        name: "Main",
		components:{Time,Date}
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
	.blocks-time{
		width: $timeBlockWidth;
		height: $timeBlockHeight;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.block-date{
		margin-top: 20px;
		height: 450px;
	}
}
</style>
