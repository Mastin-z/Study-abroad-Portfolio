// miniprogram/pages/courseSearch/courseSearchByLoc.js
var util = require('../../utils/util.js');
 var time = util.formatTime(new Date());
  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startCity: '',
    endCity: '',
    startAddress: {},
    endAddress: {},
    date: '',
    courseSearchList: [],
    showType: 0
  },
  time: function () {
    var that = this;
 
    that.countDown();
    that.data.timer = setInterval(that.countDown, 1000);
  },
 
 
  countDown: function () {
    var that = this;
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    that.setData({
      time: time
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.courseCard = this.selectComponent("#courseCard");
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

  },

  /**
   * 日期选择 
   */
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.getCourseByDistrict();
  },
  /**
   * 选择终点
   */
  bindSelectEnd: function (e) {
    this.chooseLocation('end');
  },
  /**
   * 选择起点
   */
  bindSelectStart: function (e) {
    this.chooseLocation('start');
  },
  
  chooseLocation: function (type) {
    let _this = this;
    new Promise(resolve => {
      wx.chooseLocation({
        success: function (res) {
          console.log(res)
          if (type === 'start') {
            _this.setData({        
              startAddress: {
                name: res.name,
                latitude: res.latitude,
                longitude: res.longitude
              }
            })
          } else {
            _this.setData({
              endAddress: {
                name: res.name,
                latitude: res.latitude,
                longitude: res.longitude
              }
            })
          } 
          resolve(res)
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }).then(res => {
      demo.reverseGeocoder({
        location: {
          latitude: res.latitude,
          longitude: res.longitude
        },
        success: function (res2) {
          // 设置state
          if (type === 'start') {
            _this.setData({
              startCity: res2.result.address_component.city,
            })
          } else {
            _this.setData({
              endCity: res2.result.address_component.city,
            })
          } 
          // 判断是否请求数据
          _this.getCourseByDistrict();
        },
      });
    })
  }
})

function sortByDisStart(a, b) {
  return a.distanceStart - b.distanceStart
}
function sortByDisEnd(a, b) {
  return a.distanceEnd - b.distanceEnd
}