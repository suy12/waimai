<template>
  <div id="app">
  	<!--头部-->
    <myheader></myheader>
   <!--导航-->
   <div class="nav">
   <div class="nav-item">
   	<router-link to="/goods">商品</router-link>
   </div>
   <div class="nav-item">
   	<router-link to="/rating">评价</router-link>
   </div>
   <div class="nav-item">
   	<router-link to="/seller">商家</router-link>
   </div>
   
   <!--<div class="nav-item" v-for="(item.index) in router ">
   	<router-link :to="item.path">{{item.name}}</router-link>
   </div>-->
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
	//引入
import header from "./components/header/header.vue"
export default {
  name: 'App',
  components:{
	"myheader":header
}
}
</script>

<style scoped="scoped">
.nav{
	width:100% ;
	height: 40px;

	display: flex;
	border-bottom: 1px solid #ccc;
}
.nav-item{
	flex: 1;
	text-align: center;
	line-height: 40px;
}
a{
	/*点击空白跳转 display*/
	display: block;
	text-decoration: none;
	color: black;
}
.current{
	color: red;
}
</style>
