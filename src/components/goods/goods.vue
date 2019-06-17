<template>
	<div>
		<div class="goods">
			<div class="goods_left" ref="navContiner">
				<ul>
					<li v-for="(item,index) in goods" class="goods_name" :class="{current:index==currentIndex}" @click="clickMenu(index)">
						<div class="goods_name_text">
							<img v-show="index==1" width="12" height="12" src="../../common/less/special_3@2x.png" />
							<img v-show="index==2" width="12" height="12" src="../../common/less/discount_3@2x.png" />
							<span>{{item.name}}</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="goods_right" ref="foodsContiner">
				<ul>
					<!--分类进行遍历-->
					<li v-for="item in goods" ref="foodsList">
						<div class="type_name">{{item.name}}</div>
						<!--商品进行遍历-->
						<div class="food_detail" v-for="itemt in item.foods">
							<div class="food_img">
								<img width="57" height="57" :src="itemt.image" />
							</div>

							<div class="food_detail_name">
								<div class="type">
									{{itemt.name}}
								</div>
								<div class="desc">
									{{itemt.description}}
								</div>
								<div class="count">
									月售{{itemt.sellCount}} 好评{{itemt.rating}}%
								</div>
								<div class="price">
									<span>￥{{itemt.price}}</span>
									<span class="oldprice" v-if="itemt.oldPrice">￥{{itemt.oldPrice}}</span>
									<div class="contro1">
										<cartcontrol :food="itemt"></cartcontrol>
									</div>
								</div>
								<!--添加或减少商品-->

							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<shopcart :selectData="selectData" :qisPrice="qisPrice" :peisong="peisong"></shopcart>
	</div>
</template>

<script>
	import BScrool from 'better-scroll';
	import cartcontrol from "../cartcontrol/cartcontrol";
	import shopcart from "../shopcart/shopcart"
	export default {
		name: "goods",
		components: {
			'cartcontrol': cartcontrol,
			'shopcart': shopcart
		},
		data() {
			return {
				qisPrice: 20,
				peisong: 4,
				currentIndex: 0,
				goods: null
			}
		},
		created() {
			//获取数据
			var vm = this;
			this.$http.get("/api/goods").then(function(resp) {
				vm.goods = resp.body.data;
				//初始化better-scroll
				vm.$nextTick(function() {
					vm.initScroll();
				})
			})
		},
		computed: {
			selectData: function() {
				let arr = [];
				if(this.goods) {
					//获取已经选择的商品
					this.goods.forEach(function(item) {
						item.foods.forEach(function(itemx) {
							if(itemx.count) {
								arr.push(itemx);
							}
						})
					})
				}
				return arr;
			}
		},
		methods: {
			clickMenu: function(index) {
				this.currentIndex = index;
				//获取右侧的li的dom
				var domli = this.$refs.foodsList[index]
				this.foodsContiner.scrollToElement(domli, 1000);

			},
			//初始化better-scroll插件
			initScroll: function() {
				//插件初始化左侧导航
				this.navContiner = new BScrool(this.$refs.navContiner, {
					click: true
				})
				//插件初始化右侧数据
				this.foodsContiner = new BScrool(this.$refs.foodsContiner, {
					click: true,
					probeType: 3
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.goods {
		width: 100%;
		position: absolute;
		top: 174px;
		left: 0px;
		bottom: 0px;
		display: flex;
		overflow: auto;
	}
	/*商品导航*/
	
	.goods_left {
		width: 80px;
		/*固定一块用*/
		flex: 0 0 80px;
		background-color: RGB(243, 245, 247);
		/*滚动条*/
		/*overflow-y: auto;*/
	}
	
	.goods_name {
		width: 80px;
		height: 54px;
		font-size: 12px;
		display: table;
	}
	
	.goods_name_text {
		padding: 0 12px;
		display: table-cell;
		vertical-align: middle;
		border-bottom: 1px solid #ddd;
	}
	
	.current {
		background-color: white;
	}
	/*右侧所有商品*/
	
	.goods_right {
		overflow: hidden;
		flex: 1;
		/*overflow-y: auto;*/
	}
	
	.goods_right .type_name {
		width: 100%;
		height: 26px;
		background-color: #f3f5f7;
		border-left: 2px solid #d9dde1;
		padding-left: 14px;
		line-height: 26px;
		color: #93999f;
	}
	
	.food_detail {
		display: flex;
		margin: 18px;
		border-bottom: 2px solid #eee;
		padding-bottom: 18px;
	}
	
	.food_detail>.food_img {
		flex: 1;
	}
	
	.food_detail>.food_detail_name {
		flex: 3;
	}
	
	.food_detail_name .type {
		font-size: 12px;
		line-height: 14px;
		color: #07111b;
		font-weight: 700;
	}
	
	.food_detail_name .desc {
		color: #93999f;
		font-size: 10px;
		line-height: 18px;
		margin: 8px 0;
	}
	
	.food_detail_name .count {
		color: #93999f;
		font-size: 10px;
		line-height: 12px;
	}
	
	.food_detail_name .price {
		font-size: 14px;
		font-weight: 700;
		color: red;
		line-height: 24px;
	}
	
	.food_detail_name .oldprice {
		color: #93999f;
		text-decoration: line-through;
		font-size: 10px;
		line-height: 24px;
		font-weight: 700;
	}
	
	.contro1 {
		float: right;
		margin-top: -30px;
		margin-right:10px ;
	}
</style>