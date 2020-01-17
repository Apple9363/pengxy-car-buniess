//index.js
Page({
  data: {
    imgUrls: [
      {
        id:1,
        url:'https://upload-images.jianshu.io/upload_images/9607275-d5a0b182869dea1c.jpg'
      },
      {
        id: 2,
        url:'https://upload-images.jianshu.io/upload_images/9607275-614423209c7f7a6f.jpg'
      },
      {
        id: 3,
        url:'https://upload-images.jianshu.io/upload_images/9607275-58b7be58522327f4.png'
      },
      {
        id:4,
        url: 'https://upload-images.jianshu.io/upload_images/9607275-ae32fea20903b830.jpg'
      }
      
    ],
    carList: [
          {
            id: 1,
            carName: '新能源汽车EU7',
            imgSrc: 'https://upload-images.jianshu.io/upload_images/9607275-2c6e79902cc1de47.jpg',
            images: [],
            description: 'EU7价格区间：15.99万—17.59万',
            imgDetail: [
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/1.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/2.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/3.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/4.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/5.jpg'
           ],
            productDes: ['新能源汽车'],
            price: '99',
            service: '5年50万公里厂家电池质保。'
          },
          {
            id: 2,
            carName: '新能源汽车EU5',
            imgSrc: 'https://upload-images.jianshu.io/upload_images/9607275-79cccedb123bce7d.jpg',
            images: [],
            description: 'EU5价格区间：13.29万—17.19万',
            productDes: ['新能源汽车'],
            imgDetail: [
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/6.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/7.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/8.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/9.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/10.jpg'
            ],
            setting: '配置',
            price: '99',
            service: '5年50万公里厂家电池质保。'
          },
          {
            id: 3,
            carName: '新能源汽车AionS埃安',
            imgSrc: 'https://upload-images.jianshu.io/upload_images/9607275-da1f312e7781ea66.jpg',
            images: [],
            description: 'AionS埃安价格区间： 13.98万-20.58万',
            imgDetail: [
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/11.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/12.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/13.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/14.jpg'
            ],
            productDes: ['新能源汽车'],
            setting: '配置',
            price: '99',
            service: '6年60万公里厂家电池质保'
          },
          {
            id: 4,
            carName: '新能源秦ProEV',
            imgSrc: 'https://upload-images.jianshu.io/upload_images/9607275-24a25d23932ab17f.jpg',
            images: [],
            description: '秦ProEV价格区间：12.99万-16.99万',
            productDes: ['新能源汽车'],
            imgDetail: [
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/15.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/16.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/17.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/18.jpg'
            ],
            setting: '配置',
            price: '99',
            service: '5年50万公里厂家电池质保。'
          },
          {
            id: 5,
            carName: '新能源汽车帝豪EV',
            imgSrc: 'https://upload-images.jianshu.io/upload_images/9607275-cacb498bd02d262e.jpg',
            images: [],
            description: '帝豪EV价格区间：12.58万-15.98万',
            productDes: ['新能源汽车'],
            imgDetail: [
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/19.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/20.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/21.jpg',

            ],
            setting: '配置',
            price: '99',
            service: '5年50万公里厂家电池质保'
          },
          {
            id:6,
            carName: '新能源汽车荣威ei6',
            imgSrc: 'https://upload-images.jianshu.io/upload_images/9607275-37e6fef1375d9c7f.jpg',
            images: [],
            description: '荣威ei6价格区间：14.78万-17.88万',
            productDes: ['新能源汽车'],
            imgDetail: [
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/22.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/23.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/24.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/25.jpg',
              'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/26.jpg'

            ],
            setting: '配置',
            price: '',
            service: '5年50万公里厂家电池质保。'
          }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    mainCar: {
      id: 1,
      carName: '北汽新能源汽车咨询',
      imgSrc: 'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/activite.jpg',
      price: '',
      setting: '配置如下',
      imgDetail: ['/images/adv_detail_1.jpg', '/images/adv_detail_2.jpg'],
      service: '8年15万公里质保整车免费检测成功购车套餐价享受终身保养政策',
      description: '一站式4s店支持+置换有礼',
      productDes: ['详情请咨询刘生：13728933796']
    },
    newCarList: [
      {
        id: 1,
        carName: '汽车阶段的规则流程',
        imgSrc: 'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/27.jpg',
        price: '',
        setting: '配置如下',
        service: '归档资料：办理抵押登记、证件扫描件等',
        imgDetail:['https://raw.githubusercontent.com/Apple9363/liu-images/master/car/28.jpg'],
        description: '',
        productDes: ['1.两证1卡即可批款，征信要求宽松，简单效率最高20万。',
                      '2. 20万-50万批款不需任何担保，只需个人资产支撑即可',
                      '3.汽车指标贷最高30万，汽车抵贷最高50万。',
                      '4.利率低，年化利率3%—6% 可分3—5年还款。']
      },
      {
        id: 2,
        carName: '汽车车务代办	保险/临牌/违章',
        imgSrc: 'https://raw.githubusercontent.com/Apple9363/liu-images/master/car/29.jpg',
        images: ['https://raw.githubusercontent.com/Apple9363/liu-images/master/car/29.jpg','/images/adv_3_1.jpg'],
        price: '',
        setting: '配置如下',
        service: '1.保险49折出单返点高达20% ；'+
        '2.临牌支持车管所查档',
        imgDetail: ['/images/adv_3_detail_1.jpg'],
        description: '年检/过户/解压等',
        productDes: ['汽车各种业务均可解决'],
        productDesImage: ['/images/adv_3_detail_2.jpg','/images/adv_3_detail_3.jpg']
      },
    ]
  },
  carTabDetail: function(e){
    let str = JSON.stringify(e.currentTarget.dataset.postad);
    wx.navigateTo({
      url: '../component/cardetail/cardetail?Msg=' + str
    })
  },
  tabDetail: function (e) {
    let str = JSON.stringify(e.currentTarget.dataset.postad);
    wx.navigateTo({
      url: '../component/detail/detail?Msg=' + str
    })
  }
})
