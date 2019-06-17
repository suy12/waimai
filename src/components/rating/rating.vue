<template>
	<div v-if="seller">
		<div class="shopper">
		<div class="score">
			<div class="text">{{seller.score}}</div>
			<div class="ztext">综合评分</div>
			<div class="gtext">高于周边商家{{seller.rankRate}}%</div>
		</div>
		<div class="starScore">
			<div class="otherScore">
				<div class="line">
				<span class="service">服务态度</span>
				<star :size="15" :margin="4" :score="seller.serviceScore"></star>
				</div>
				<div>{{seller.serviceScore}}</div>
			</div>
			<div class="otherScore">
				<span class="service">商品评分</span>
				<star :size="15" :margin="4" :score="seller.foodScore"></star>
				<div>{{seller.foodScore}}</div>
			</div>
			<div>
				<span class="service">送达时间</span>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	import star from "../star/star"
	export default{
		components:{
			star:star
		},
		data(){
			return{
				seller:null
			}
		},
		created(){
		var vm=this;
		this.$http.get("/api/seller").then(function(resp){
			vm.seller=resp.body.data;
		})
	}
	}
</script>

<style scoped="scoped">
	.shopper{
		width: 100%;
		height: 108px;
		padding: 18px 0;
		display: flex;
	}
	
	.shopper .score{
		flex: 1;
		border-right:1px solid #ccc;
	}
	.shopper .score .text{
		line-height: 28px;
		font-size: 24px;
		color: #ff9900;
		margin-bottom: 6px;
		text-align: center;
	}
	.shopper .starScore{
		flex: 2;
	}
	.shopper .score .ztext{
		font-size: 12px;
		text-align: center;
		margin: 5px 0px;
	}
	.shopper .score  .gtext{
		font-size: 10px;
		color: #93999f;
		text-align: center;
	}
</style>