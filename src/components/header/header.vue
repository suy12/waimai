<template>
	<div v-if="seller">
	<div class="header" >
		<div class="header_container">
			<div class="img">
				<img src="../../../static/img/seller_bg.jpg" 
					width="64" height="64"/>
			</div>
					
			<div class="title"  > 
				<div class="line1">
					<img src="../../../static/img/brand.png" width="30" height="18" />
					<span>{{seller.name}}</span>
				</div>
				<div class="line2">
					<span>{{seller.description}}/{{seller.deliveryTime}}分钟到达</span>
				</div>
				<div class="line3">
					<img width="12" height="12" src="../../../static/img/jian.png"/>
					<span class="desc">{{seller.supports[0].description}}</span>
					<span class="num" @click="showMask" >{{seller.supports.length}}个></span>
				</div>
		</div>
		<div class="gonggao" @click="showMask" >
				<img src="../../../static/img/gonggao.png"  width="22" height="12"/>
				<span class="font" >{{seller.bulletin}}</span>
				<span class="arrow">></span>
			   </div>
	</div>
	</div>
	
	<transition name="fade">
	<div class="mask" v-show="isShow" @click="hideMask">
		<div class="masktitle">{{seller.name}}</div>
		
		<star :score="seller.score" :size="20" ></star>
		<div class="line">
			<div class="inner-line"></div>
			<div  class="info">优惠信息</div>
			<div  class="inner-line"></div>
		</div>
		
		
		<div class="list">
			<ul>
				<li v-for="(item,index) in seller.supports" >
					<img width="16px" height="16px" :src="imgurl[index]" />
					<span>{{item.description}}</span>
				</li>
			</ul>
		</div>
		<div class="line">
			<div class="inner-line"></div>
			<div  class="info">商家公告</div>
			<div  class="inner-line"></div>
		</div>
		<div class="detailinfo">{{seller.bulletin}}</div>
	</div>
	</transition>
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
			seller:null,
			isShow:false,
			imgurl:["../../../static/img/jian2.png","../../../static/img/zhe.png",
			"../../../static/img/te.png","../../../static/img/piao.png","../../../static/img/bao.png"]
		}
	},
	created(){
		var vm=this;
		this.$http.get("/api/seller").then(function(resp){
			vm.seller=resp.body.data;
		})
	},
	methods:{
		showMask:function(){
			this.isShow=true;
		},
		hideMask:function(){
			this.isShow=false;
		}
	}
}

</script>

<!--css语句只会在当前文件中生效 scoped-->
<style scoped="scoped">
.header{
	width: 100%;
	height: 134px;
	background-image: url(../../../static/img/seller_bg.jpg);
	background-repeat:no-repeat;
	background-size:100% 100%;
	
}
.header_container{
	width: 100%;
	height: 100%;
	background-color:rgba(0,0,0,0.6);
	display: flex;
	position: relative;
}
.header_container .img{
	flex: 1;
}
.header_container .img img{
	margin: 25px 0 0 25px;
}
.header_container .title{
	flex: 2.5;
	color: white;
}
.line1{
	margin-top:22px ;
	
}
.line1 img{
	/*垂直居中*/
	vertical-align: middle;
}
.line2{
	font-size:12px;
	margin: 4px 0px;
}
.line3 img{
	vertical-align:middle;
}
.line3 span.desc{
	font-size: 12px;
}
.num{
	width: 50px;
	height: 20px;
	display: inline-block;
	background-color: rgba(0,0,0,0.4);
	border-radius:10px;
	float: right;
	margin-right: 15px;
	text-align: center;
	line-height: 24px;
    font-size: 10px;
}

/*下侧公告*/
.gonggao{
	position: absolute;
	bottom: 0px;
	left:0px ;
    width: 100%;
    height:28px;
    background-color: rgba(0,0,0,0.4);	
}
.gonggao img{
	margin: 9px 0 0 10px;
	vertical-align: top;
}
.gonggao .font{
	display: inline-block;
	width: 80%;
	color: white;
	font-size: 12px;
	overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: 28px;
}
.gonggao .arrow{
	margin-right:8px ;
	float: right;
	line-height: 28px;
	height: 28px;
	color: white;
}

/*遮罩层*/
.mask{
	position: fixed;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.6);
	color: white;
	z-index: 100;
}
.masktitle{
	font-weight: 700;
	text-align: center;
	margin-top: 50px;
}
.score{
	text-align: center;
}
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
.line{
	display: flex;
	margin: 10px 30px;
}
.inner-line{
	flex: 1;
	height: 0;
	border-top: 0.5px solid rgba(255,255,255,0.6);
	margin-top: 13px ;
}
.info{
	flex: 1;
	width: 85px;
	margin: 0 20px;
	text-align: center;
	line-height: 28px;
	font-weight:700 ;
	font-size: 14px;
}
.list ul li{
	margin: 6px 0;
}
.list ul li img{
	 vertical-align: middle;
	 margin-left: 30px;
}
.list ul li span{
	font-size: 12px;
	line-height: 12px;
}
.detailinfo{
	margin: 10px 30px;
	line-height: 24px;
	font-size: 12px;
}
.fade-enter, .fade-leave-to{
	opacity: 0;
	
}
.fade-enter-active, .fade-leave-active{
	transition: opacity 1s; 
}
</style>