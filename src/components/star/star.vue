<template>
	<div class="score">
	<span :style="{width:size+'px',height:size+'px',margin:margin+'px'}"  class="star" v-for="item in parseInt(score) "></span>
	<span :style="{width:size+'px',height:size+'px',margin:margin+'px'}" class="nostar" v-for="item in 5-parseInt(score) "></span>
	</div>
</template>

<script >
	export default{
		props:{
			score:{
				type:Number
			},
			size:{
				type:Number
			},
			margin:{
				type:Number
			}
		}
	}
</script>

<style scoped="scoped">
	.score span{
	display: inline-block;
	width: 20px;
	height: 20px;
	background-size:100% 100%;
	margin: 10px 10px;
}
.score .star{
	background-image: url(../../../static/img/star.png);
}
.nostar{
	background-image:url(../../../static/img/star1.png);
}
</style>