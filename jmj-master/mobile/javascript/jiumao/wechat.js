/*!
 * =====================================================
 * 微信分享
 * =====================================================
 */


var wechat = {
    share       : function(){
        // wx.config({debug:true})
        wx.ready(function(){
            //发送给朋友
            wx.onMenuShareAppMessage({
                title       : wechat_share.title, // 分享标题
                desc        : wechat_share.desc, // 分享描述
                link        : wechat_share.link, // 分享链接
                imgUrl      : wechat_share.imgUrl, // 分享图标
                type        : 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl     : '', // 如果type是music或video，则要提供数据链接，默认为空
                success     : wechat_share.success ? wechat_share.success : function(){
                    // 用户确认分享后执行的回调函数
                },
                cancel      : wechat_share.cancel ? wechat_share.cancel : function(){
                    // 用户取消分享后执行的回调函数
                }
            });
            //发送到朋友圈
            wx.onMenuShareTimeline({
                title       : wechat_share.title, // 分享标题
                link        : wechat_share.link, // 分享链接
                imgUrl      : wechat_share.imgUrl, // 分享图标
                success     : wechat_share.success ? wechat_share.success : function(){
                    // 用户确认分享后执行的回调函数
                },
                cancel      : wechat_share.cancel ? wechat_share.cancel : function(){
                    // 用户取消分享后执行的回调函数
                }
            });
        });
    },
}
