<template>
	<div class="cartcontrol">
		<transition name="move">
		<span class="add icon-remove_circle_outline" @click="plus" v-if="food.count >0"></span>
		</transition>
		<span class="num" v-if="food.count >0">{{food.count}}</span>
		<span class="add icon-add_circle" @click="add"></span>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	export default{
		props:{
			food:{
				type:Object
			}
		},
		
		methods:{
			add:function(){
				if(this.food.count){
					this.food.count++;
				}else{
					Vue.set(this.food,"count",1);
				}
			},
			plus:function(){
				if(this.food.count >0){
					this.food.count--
				}
			}
		}
	}
</script>

<style>
	.cartcontrol{
		
	}
	.add{
		
		font-size: 24px;
		color: RGB(0,160,200);
	}
	.num{
		display: inline-block;
		vertical-align: top;
		margin: 0 5px;
	}
	.move-enter-active, .move-leave-active{
		transition: all 0.2s linear;
	}
	.move-enter, .move-leave-to{
		opacity: 0;
		transform: translate3d(24px,0,0);
		
	}
</style>