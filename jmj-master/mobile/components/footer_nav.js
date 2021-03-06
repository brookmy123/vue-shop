/**
 * Created by yb on 2016/12/20.
 */
// 注册一个首页的底部导航
// 引入css文件函数
function footer(name){
	var date = "?v="+Date.parse(new Date())
	var head = document.getElementsByTagName("head")[0];
	var filelink = document.createElement("link");
	filelink.setAttribute("rel","stylesheet");
	filelink.setAttribute("type","text/css");
	filelink.setAttribute("href",name+date);
	head.appendChild(filelink);
}
footer("/views/mobile/componentsCss/footer_nav_component.css")
var FOOTERINFOR={
    class1:"tabelitem active locationA",
    class2:'tabelitem locationA',
    nav:[{
        class:'icon',
        name:'首页',
        img1:'/views/mobile/skin/default/image/jmj/new_active/index/homeactive.png',
        img2:'/views/mobile/skin/default/image/jmj/new_active/index/home-ed.png',
        url:'/site/index'
    },
        {class:'icon',
            name:'分类',
            img1:'/views/mobile/skin/default/image/jmj/new_active/index/muneed.png',
            img2:'/views/mobile/skin/default/image/jmj/new_active/index/mune.png',
            url:'/site/sitemap'
        },
        {class:'icon showGrass',
            name:'草原',
            img1:'/views/mobile/skin/default/image/jmj/new_active/index/grassed.png',
            img2:'/views/mobile/skin/default/image/jmj/new_active/index/grass.png',
//          url:'/simple/user_said'
			url:'/site/favorite'
        },
        {class:'icon',
            name:'购物车',
            img1:'/views/mobile/skin/default/image/jmj/new_active/index/buyed.png',
            img2:'/views/mobile/skin/default/image/jmj/new_active/index/buy.png',
            url:'/simple/cart'
        },
        {class:'icon',
            name:'我的',
            img1:'/views/mobile/skin/default/image/jmj/new_active/index/myed.png',
            img2:'/views/mobile/skin/default/image/jmj/new_active/index/my.png',
            url:'/ucenter/index'
        },
    ],
    state:0
}
Vue.component('footer-nav', {
    data:function(){
        return FOOTERINFOR
    },
    props:['state','states'],
    template: '<footer v-if="states">\
    <nav class="footerNav"  style="z-index:25">\
    <a :class="state==key?class1:class2" :href="item.url" v-for="(item,key) in nav">\
    <span :class="item.class">\
    <img :src="state==key?item.img1:item.img2" data-img="home-ed.png" alt=""/>\
    </span>\
    <div class="mui-tab-label">{{item.name}}</div>\
    </a>\
    </nav>\
    </footer>'
});




