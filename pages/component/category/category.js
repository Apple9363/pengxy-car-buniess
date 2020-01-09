Page({

  /**
   * 页面的初始数据
   */
  data: {
        category: [
          {
            id: 'newEnergy',
            name: '新能源', 
            category: 'SUV',                  
            bannerUri: '../../../images/car1.jpg',
            children: [
              {
                id: 1,
                imgSrc: '../../../images/car1.jpg',
                carName: 'suv',
                price: '23万',
                setting: '系统配置',
                description: '详情描述',
                service: '一年内包维修'
              },
              {
                id: 2,
                imgSrc: '../../../images/car1.jpg',
                carName: 'suv2',
                price: '23万',
                setting: '系统配置',
                description: '详情描述',
                service: '一年内包维修'
              },
            ]
          },
          // {
          //   id: 'closecar',
          //   name: '紧凑型车',
          //   category: '紧凑型车',
          //   bannerUri: '../../../images/newCar4.jpg'
          // },
          // {
          //   id: 'middlecar',
          //   name: '中型车', 
          //   category: '中型车',
          //   bannerUri: '../../../images/newCar3.jpg'
          // },
          // {
          //   id: 'carriage',
          //   name: '轿车', 
          //   category: '轿车',
          //   bannerUri:'../../../images/newCar1.jpg'
          // }
        ],
        detail: [],
        curIndex: 0,
        isScroll: false,
        toView: 'newEnergy'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    wx.request({
      url: '',
      success(res){
        self.setData({
          detail: res.data
        })
      }
    })
  },
  switchTab: function(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.currentTarget.dataset.id,
          curIndex: e.currentTarget.dataset.index
        })
      }, 0)
      setTimeout(function(){
        self.setData({
          isScroll: false
        })
      }, 1)
  },
  switchDetail: function(e){
      let param = JSON.stringify(e.currentTarget.dataset.postad);
      wx.navigateTo({
        url: '../detail/detail?Msg=' + param
      })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
    
  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {
    
  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {
    
  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {
    
  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {
    
  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {
    
  // }
})