// pages/component/detail/detail.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      goods: {},
      timeInterval: 3000,
      durationTime: 800,
      indicatorDots: false,
      autoplay: false,
      num: 1,
      totalNum: 0,
      hasCarts: false,
      curIndex: 0,
      show: false,
      scaleCart: false
  },
  addCount: function(){
      let num = this.data.num;
      num++;
      this.setData({
        num: num
      })
  },
  addToCart: function(e){
    const self = this;
    //加入购物车的时候，先判断是否登录了，若没有登录提示用户登录
    if(e.currentTarget){
      const num = self.data.num;
      let totalNum = self.data.totalNum;
      self.setData({
        show: true
      });
      setTimeout(function () {
        self.setData({
          show: false,
          scaleCart: true
        });
        setTimeout(function () {
            let total = parseInt(num + totalNum) > 99 ? '99+' : (num + totalNum);
        
          self.setData({
            scaleCart: false,
            hasCarts: true,
            totalNum: total
          });
        }, 1000);
      }, 0)
    }else{
      wx.showModal({
        title: '提示',
        content: '请先登录，在加入购物车！',
        showCancel: true,
        confirmText: '跳转到登录页',
        success: function (res) {
          // 用户没有授权成功，不需要改变 hasUserInfo 的值
          if (res.confirm) {

          }
        }
      })
    }
      
      
  },

  bindTap(e){
      const index = parseInt(e.currentTarget.dataset.index);
      this.setData({
        curIndex: index
      })
  },
  onLaunch: function(){
    //初始化加载先判断用户登录状态
    if(wx.getStorageSync('user')){
      wx.switchTab({
        url: 'pages/index/index',
      })
    }else{
      wx.reLaunch({
        url: 'pages/component/user/user',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载,onLoad每次打开小程序只加载一次
   */
  onLoad: function (options) {
    let params = JSON.parse(options.Msg);
    this.setData({
      goods: params
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示，onShow每次打开页面都加载一次
   */
  onShow: function () {
      //在此检测用户登录状态是否过期
      //前端引导用户点击按钮触发getUserInfo 获取最新用户信息 -> 前端调用wx.login() 获取code -> 前端将code 发送给后端获取openid 和seesion_key -> 后端写session 并返回对应session 的唯一标志 -> 前端存储这个唯一标志。
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})