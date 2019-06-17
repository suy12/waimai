<template>
	<div class="foot">
		<div class="left">
			<div class="shopcart">
				<span class=" icon icon-shopping_cart" :class="{active:totalPrice>0}"></span>
				<span class="totleNum" v-if="totalPrice>0" >{{totleNum}}</span>
			</div>
			<div class="totalPrice" :class="{active:totalPrice>0}">
				￥{{totalPrice}}
			</div>
			<div class="delivPrice">
				另需配送费￥{{peisong}}
			</div>
		</div>
		<div class="right" :class="{active:totalPrice>=qisPrice}">
			<span>{{showText}}</span>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			selectData:{
				type:Array
			},
			peisong:{
				type:Number
			},
			qisPrice:{
				type:Number
			}
		},

        computed:{
        	showText:function(){
        		if(this.totalPrice==0){
        			return "￥"+this.qisPrice+"元起送";
        		}else if(this.totalPrice >= this.qisPrice){
        			return "去结算"
        		}else{
        			return "还差￥"+(this.qisPrice-this.totalPrice)
        		}
        	},
        	totalPrice:function(){
        		var totalp=0;
        	this.selectData.forEach(function(item){
        		totalp=totalp+item.count*item.price;
        	})
        	if(totalp<0){
        		totalp=0;
        	}
        	return totalp;
        },
        totleNum:function(){
        	var totalp=0;
        	this.selectData.forEach(function(item){
        		totalp=totalp+item.count;
        	})
        	if(totalp<0){
        		totalp=0;
        	}
        	return totalp;
        
        }
		}
	}
</script>
<style scoped="scoped">
	.foot{
		width: 100%;
		height: 48px;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
	}
	
	.foot .left{
		flex: 1;
		background-color: RGB(20,29,39);
	}
	
	
	.foot .shopcart{
		width: 56px;
		height: 56px;
		background-color:RGB(20,29,39) ;
		border-radius:50% ;
	    position: absolute;
	    left: 0;
	    bottom: 5px;
	    margin-left: 10px;
	    display: inline-block;
	}
	.foot .icon{
		font-size: 24px;
		width: 44px;
		height: 44px;
		display: inline-block;
		border-radius:50% ;
		margin: 6px;
		background-color: RGB(43,51,59);
		color: rgba(255,255,255,0.4);
		text-align: center;
		line-height: 44px;
	}
	.totalPrice{
		display: inline-block;
		position: absolute;
		left: 80px;
		color: rgba(255,255,255,0.4);
		font-weight:700 ;
		margin: 14px 0px;
		border-right:1px solid #ccc ;
		padding-right: 10px;
	}
	.delivPrice{
		position: absolute;
		left: 136px;
		color: rgba(255,255,255,0.4);
		font-size: 10px;
		line-height: 48px;
		
	}
	.foot .right{
		flex: 0 0 105px;
		background-color: RGB(43,51,59);
		color: rgba(255,255,255,0.4);
		line-height: 48px;
		font-weight: 700;
		font-size: 10px;
		text-align: center;
	}
	.totalPrice.active{
		color: white;
	}
	.icon.active{
		background-color: #00a0c8;
		color: white;
	}
	.totleNum{
		display: inline-block;
		width: 24px;
		height: 18px;
		background-color: red;
		color: white;
		position: absolute;
		right: 0px;
		top: 0px;
		text-align: center;
		line-height: 15px;
		border-radius:5px;
		font-size: 10px;
		font-weight:700 ;
	}
	.right.active{
		background-color: #00b43c;
		color: white;
	}
</style>