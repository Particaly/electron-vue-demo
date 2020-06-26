<template>
	<div class="time-holder">
		<div class="time">
			<span :class="{maohao: item===':'}" v-for="(item,key) in time" v-bind:key="key">{{item}}</span>
		</div>
		<div class="date">{{date}}</div>
	</div>
</template>

<script>
	import moment from 'moment'
    export default {
        name: "Time",
		data:function(){
		    return {
		        time: '00:00:00',
				date: '0000年00月00日'
		    }
		},
		mounted(){
            this.refreshTime();
		},
		methods:{
		    refreshTime(){
		        requestAnimationFrame(this.refreshTime);
		        const momenter = moment();
				const now = momenter.format('H:mm:ss');
                const date = momenter.format('YYYY年M月D日');
				if(this.time !== now){
				    this.time = now;
				}
				if(this.date !== date){
				    this.date = date;
				}
			}
		},
    }
</script>

<style scoped lang="scss">
.time-holder{
	font-family: "DS-Digital","Microsoft YaHei",serif;
	font-size: 48px;
	color: white;
	opacity: 0.85;
	text-align: center;
	.time{
		width: 100%;
		display: flex;
		span{
			display: flex;
			width: 24px;
			justify-content: flex-end;
			&.maohao{
				width: 8px;
			}
		}
	}
	.date{
		font-family: "Microsoft YaHei", "serif";
		font-size: 20px;
		font-weight: 100;
	}
}
</style>
