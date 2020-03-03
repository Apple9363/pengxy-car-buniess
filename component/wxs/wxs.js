modul.exports = {
    touchmove: function(event, instance){
        console.log(JSON.stringify(event))
    },
    propObserver: function(newValue, oldValue, ownerInstance, instance){
        console.log('prop Observer', newValue, oldValue);
    }
}

//获取界面上的常用节点
 const query =  wx.createSelectorQuery();
 query.select('#the-id').boundingClientRect(function(res){
        res.top;  //上边界坐标
 });

 query.selectViewport().scrollOffSet(function(res){
     res.scrollTop; //显示区域的y轴滚动位置
 })
 query.exec();

 onLoad: function(){
     wx.createIntersectionObserver().relativeToViewport().observe('.target-class', (res)=>{
         res.id //目标节点id
         res.dataset, 
         res.intersectionRatio,
         res.intersectionRect,
         res.intersectionRect.left,
         res.intersectionRect.top,
         res.intersectionRect.width,
         res.intersectionRect.height
     });
     /***
      * 数据监听器
      */
     Component({
         //触发下面的observer
         attached: function(){
             this.setData({
                 numberA: 1,
                 numberB: 2
             }),
             this.setData({
                 'some.field': { }
             }),
             this.setData({
                 'some.field.xx': { }
             })
         },
         /**
          * 数据监听，监听的是setData所涉及到的字段，即使这些字段的值没有发生变化，数据监听仍然会被触发。
          */
         observer: {
             'numberA , numberB': function(numberA , numberB){
                    this.setData({
                        sum: numberA + numberB
                    })
             },
             'some.subfeild': function(subfeild){
                     subfeild === this.data.some.subfeild
             },
             'arr[12]': function(arr12){
                 arr12 === this.data.arr[12]
             },
             //若要监听所有子数据字段，可以使用通配符 **
             'some.field.**': function(field){
                 field === this.data.some.field
             },
             //只使用通配符**可以监听所有的setData
             '**': function(){
                 console.log('每次setData都出发')
             }
         }
         
     })
 }