Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../index/user-unlogin.png',
    latitude: '34.79977',
    longitude: '113.66072',
    startAddressInfo: '',
    endAddressInfo: '',
    personRange:[1, 2, 3, 4, 5],
    index: -1,
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }],
    date: '',
    time: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 日期选择 
   */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    // 设置 跳转搜索页面参数
    searchObj.date = e.detail.value
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindNumChange: function(e) {
    console.log(e.detail)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function (e) {
    /**
     * 表单校验
     */
    let submitFlag = true;
    let formData = e.detail.value;
    for (var Key in formData) {
      if (formData[Key] == "") {
        submitFlag = false;
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '请完善拼车信息！'
        });
        break;
      }
    }
    
    if (submitFlag) {
      // 开始处理提交
      wx.showLoading({
        title: '提交中...',
      })
      formData.startAddressInfo = this.data.startAddressInfo;
      formData.endAddressInfo = this.data.endAddressInfo;
      formData.avatarUrl = this.data.avatarUrl;
      formData.nickName = this.data.nickName;
      console.log("###", this.data.avatarUrl)

      // 写入行程汇总数据
      

      

      
    }
  },
  passengerMsgAdd: function(e) {
    
  },
  
 
  /**
   * 选择终点
   */
  bindSelectEnd: function(e) {
    let _this = this;
    console.log('--')
    wx.chooseLocation({
      success: function (res) {
        // 解析地址获取 市区县等信息
        demo.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res2) {
            // 设置 跳转搜索页面参数
            searchObj.endAddress = {
              name: res.name,
              city: res2.result.address_component.city,
              latitude: res.latitude,
              longitude: res.longitude
            }
            _this.setData({
              endAddressInfo: {
                name: res.name,
                address: res.address,
                latitude: res.latitude,
                longitude: res.longitude,
                addressComponent: res2.result.address_component
              }
            })
          },
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
  /**
   * 选择起点
   */
  bindSelectStart: function (e) {
    let _this = this;
    console.log('--')
    wx.chooseLocation({
      success: function (res) {
        // 解析地址获取 市区县等信息
        demo.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res2) {
            // 设置 跳转搜索页面参数
            searchObj.startAddress = {
              name: res.name,
              city: res2.result.address_component.city,
              latitude: res.latitude,
              longitude: res.longitude
            }
            _this.setData({
              startAddressInfo: {
                name: res.name,
                address: res.address,
                latitude: res.latitude,
                longitude: res.longitude,
                addressComponent: res2.result.address_component
              }
            })
          },
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
})