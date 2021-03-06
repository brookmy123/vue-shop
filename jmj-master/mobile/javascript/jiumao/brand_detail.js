var stop = true;
var Request = new Object();
Request = GetRequest();
var statusOrder=Request["id"];
var em = new Vue({
	el:"#wrap",
	data:{
		showloadding:true,
		info:[],
		img1:'/views/mobile/skin/default/image/jmj/article/brank_banner.jpg',
		page:1,
		infolist:[],
		infoac:[],
		infoState:false
	},
	computed: {
		showLastImg:function(){
			
			return 	this.info;
			
		},
		
		showLastac:function(){
			this.infoac.map(function(item){
				item.url="/site/article_detail?id="+item.id;
			})
			return 	this.infoac
		},
		
		showLastgood:function(){
			this.infolist.map(function(item){
				item.url="/site/products?id="+item.id;
			})
			return 	this.infolist
		}
	},
	mounted: function(){
		var self=this;
		if(getSession("pinpai_infolist")){
			self.page = getSession("pinpai_page");
			self.infolist = getSession("pinpai_infolist");
			getRelateArticle(statusOrder,self);
		}
		else{
			self.page = 1;
			self.infolist = []
			getRelateArticle(statusOrder,self);
		}
	},
	updated:function() {
		var heights = $("#article_top").height()
		if(heights!=0){
			if(heights<=30){
				$("#article_footer").hide()	
			}
		}
		lazyload.init({
			anim:false,
			selectorName:".samLazyImg"
		});
	},
	 methods:{
	 	
	 }
})

function getRelateArticle(statusOrder,self){
	mui.ajax('/apic/brand',{
		data:{
			"id":statusOrder,
			"page": self.page
		},
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			self.showloadding=false;
			document.title=data.data.name;
			self.info = data.data;
			self.infoac=data.data.article_list;
			data.data.goods_list.map(function(item){
				self.infolist.push(item);
			})
			pushSession("pinpai_infolist", self.infolist);
			if(data.data.goods_list==''){
                self.infoState=true;
                stop=false;
            }else{
            	self.infoState=false;
                stop=true;
                self.page++;
            }    
            
            console.log(self.page);
            pushSession("pinpai_page", self.page)
		}
	});
}

//获取id值
function GetRequest() {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
  }
  return theRequest;
}

	//懒加载
$(window).bind('scroll', function() {
	if ($(window).scrollTop() + $(window).height() +100 >= $(document).height() && $(window).scrollTop() > 50) {
        if(stop==true){
        	em.showloadding=true;
        	console.log(1);
            stop=false;
            getRelateArticle(statusOrder,em);
        }
   }
});


		//			缓存
    function pushSession(key,value){
        var val=JSON.stringify(value)?JSON.stringify(value):[];
        if(window.sessionStorage){
            sessionStorage.setItem(key,val);
        }else{
            console.log("无法使用缓存");
            return "";
        }
    }
    function getSession(key){
        if(window.sessionStorage){
            var state=sessionStorage.getItem(key)?sessionStorage.getItem(key):0;
            return JSON.parse(state);
        }else{
            console.log("无法使用缓存");
            return "";
        }
    }
    function removeSessionItem(key){
        window.sessionStorage.removeItem(key);
    }

