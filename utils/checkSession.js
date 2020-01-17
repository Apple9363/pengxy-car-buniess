Page({

  /**
   * 页面的初始数据
   */
  data: {
    nikeName: '',
    city: ''
  },
  
  checkSession: function(){
    wx.checkSession({
      success: function (res) {
        console.log('登录未过期');
        wx.showToast({
          title: '未过期'
        })
       },
      fail: function (res) { 
        console.log(res, '登录已过期');
        wx.showModal({
          title: '提示',
          content: '登录已过期，请重新登录',
        });
        //再次调用wx.login
        wx.login({
          success: function(res){
            console.log(res.code);
            wx.request({
              url: '接口地址',
              data: {
                code: res.code
              },
              header: {
                'content-type': 'application/json'
              },
              success: function(res){
                console.log(res);
              }
            })
          }
        })

      },
      complete: function (res) { },
    })
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