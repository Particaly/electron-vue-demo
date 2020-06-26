<template>
	<div class="date-component">
		<div class="date-title">
			<div class="render-content inner-border" v-for="(item,key) in title" v-bind:key="key">{{item}}</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Date",
		data:function(){
		    return {
				title: [
				    '星期一','星期二','星期三','星期四','星期五',
					'星期六','星期天'
				]
		    }
		},
    }
</script>

<style scoped lang="scss">
.date-component{
	height: 100%;
	.date-title{
		display: flex;
	}
	.render-content{
		height: 40px;
		flex: 1;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
