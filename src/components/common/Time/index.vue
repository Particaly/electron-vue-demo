<template>
	<div class="time-holder">
		<div class="time">{{time}}</div>
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
				const now = momenter.format('h:mm:ss');
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
	text-align: left;
	.time{
		width: 150px;
	}
	.date{
		font-family: "Microsoft YaHei", "serif";
		font-size: 20px;
		font-weight: 100;
	}
}
</style>
