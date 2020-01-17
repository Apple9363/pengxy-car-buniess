//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('block.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
          console.log(res);
          
          //userInfo:nikeName,city,country,gender,avatarUrl,language,province
          //由于getUserInfor是网络请求，可能会在onLoad之后才返回，加入callback防止这种情况
          if(this.userInfoReadyCallback){
              this.userInfoReadyCallback;
          }

        }
      })
    }
  },
  getUserInfo: function(e) {
    if (e.detail.userInfo){
        //用户按了允许按钮
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }else{
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后在进入！',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res){
           // 用户没有授权成功，不需要改变 hasUserInfo 的值
          if(res.confirm){
            
          }
        }
      })
    }
    
  }
 
})
