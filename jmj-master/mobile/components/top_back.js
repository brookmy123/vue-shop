function top_back(classrount){
	var data="?v="+Date.parse(new Date());
	var head = document.getElementsByTagName("head")[0]
	var filerount = document.createElement("link");
	filerount.setAttribute("rel","stylesheet");
	filerount.setAttribute("type","text/css");
	filerount.setAttribute("href",classrount+data);
	head.appendChild(filerount);
	console.log(filerount)
}
top_back("/views/mobile/componentsCss/top_back_component.css");
Vue.component("top_back_car",{
	template:'<div class="top_fixd">\
        <div class="backImg">\
			<img src="/views/mobile/skin/default/image/jmj/product/back.png" alt="" style="width:0.43rem" @click="back"/>\
		</div>\
		<a href="/site/index" class="home locationA"><img src="/views/mobile/skin/default/image/jmj/product/home.png" alt="" style="width:0.55rem" /></a>\
		<a href="/simple/cart" id="cart" class="locationA">\
			<div class="img">\
				<div class="mark flexbox">{{msg}}</div>\
				<img src="/views/mobile/skin/default/image/jmj/product/cart.png" alt="" style="width:0.55rem" />\
			</div>\
		</a>\
    </div>',
    props:["msg"],
    methods:{
    	back:function(){
    		window.history.go(-1);
    	}
    }
})
