//index.js
Page({
  data: {
    imgUrls: [
      '/images/banner1.png',
      '/images/banner2.png',
      '/images/banner3.png',
      '/images/banner4.png'
    ],
    carList: [
          {
            id: 1,
            carName: '新能源汽车EU7',
            imgSrc: '/images/newCar1.jpg',
            images: ['/images/newCar1.jpg', '/images/newCar1.jpg'],
            description: '产品详情描述产品详情描述产品详情描述产品详情描述产品详情描述产品详情描产品详情描述产品详情描述产品详情描述',
            productDes: '',
            setting: '配置',
            price: '16万',
            service: '一年内包维修'
          },
          {
            id: 2,
            carName: '新能源汽车EU2',
            imgSrc: '/images/newCar2.jpg',
            images: [],
            description: '产品详情描述',
            productDes: '',
            setting: '配置',
            price: '12万',
            service: '一年内包维修'
          },
          {
            id: 3,
            carName: '新能源EU3',
            imgSrc: '/images/newCar3.jpg',
            images: [],
            description: '产品详情描述',
            productDes: '',
            setting: '配置',
            price: '12万',
            service: '一年内包维修'
          },
          {
            id: 4,
            carName: '新能源EU4',
            imgSrc: '/images/newCar4.jpg',
            images: [],
            description: '产品详情描述',
            productDes: '',
            setting: '配置',
            price: '12万',
            service: '1年内包维修'
          },
          {
            id: 5,
            carName: '新能源EX2',
            imgSrc: '/images/newCar3.jpg',
            images: [],
            description: '产品详情描述',
            productDes: '',
            setting: '配置',
            price: '10万起',
            service: '3年内包维修'
          },
          {
            id:6,
            carName: '新能源EX6',
            imgSrc: '/images/newCar2.jpg',
            images: [],
            description: '产品详情描述',
            productDes: '',
            setting: '配置',
            price: '12万',
            service: '2年内包维修'
          }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    mainCar: {
      id: 1,
      carName: '北汽新能源汽车咨询',
      imgSrc: '/images/adv_1.png',
      price: '',
      setting: '配置如下',
      imgDetail: ['/images/adv_detail_1.png', '/images/adv_detail_2.png'],
      service: '8年15万公里质保整车免费检测成功购车套餐价享受终身保养政策',
      description: '一站式4s店支持贷款免息+置换有礼'
    },
    newCarList: [
      {
        id: 1,
        carName: '汽车分期贷款 8—10成',
        imgSrc: '/images/adv_2.png',
        price: '',
        setting: '配置如下',
        service: '2年保修',
        imgDetail: ['/images/adv_2_detail_1.png'],
        description: '低首付分期贷款流程',
        productDes: ['1.两证1卡即可批款，征信要求宽松，简单效率最高20万。',
                      '2. 20万-50万批款不需任何担保，只需个人资产支撑即可',
                      '3.汽车指标贷最高30万，汽车抵押贷最高50万。',
                      '4.利率低，年化利率3%—6% 可分3—5年还款。']
      },
      {
        id: 2,
        carName: '汽车车务代办	保险/临牌/违章',
        imgSrc: '/images/adv_3.png',
        images: ['/images/adv_3.png','/images/adv_3_1.png'],
        price: '',
        setting: '配置如下',
        service: '3年保修',
        imgDetail: ['/images/adv_3_detail_1.png'],
        description: '年检/过户/抵押/解压',
        productDes: ['汽车各种业务都可办理'],
        productDesImage: ['/images/adv_3_detail_2.png','/images/adv_3_detail_3.png']
      },
    ]
  },
  tabDetail: function(e){
    let str = JSON.stringify(e.currentTarget.dataset.postad);
    wx.navigateTo({
      url: '../component/detail/detail?Msg=' + str
    })
  }
})
