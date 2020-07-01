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
		components:{Time,Date},
		created(){
        	document.addEventListener('mousemove',this.mouseMove);
		},
		methods: {
		    mouseMove(e){
		    	console.log(e);
			}
		},
    }
</script>

<style scoped lang="scss">

.main{
	width: 100%;
	height: 100%;
	background-image: linear-gradient(60deg, rgba(41,50,60,.8) 0%, rgba(72,85,99,.8) 100%);
	border-radius: 5px;
	border: 1px solid rgba(255,255,255,.16);
	overflow: hidden;
	padding: 15px;
	pointer-events: none;
	.blocks-time{
		width: $timeBlockWidth;
		height: $timeBlockHeight;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.block-date{
		margin-top: 20px;
		height: calc(100% - #{$timeBlockHeight} - 20px);
	}
}
</style>
