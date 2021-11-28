Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    // 拼车信息
    msgList: [],
    courseTotalList: [],
    locationInfo: '',
    showType: 0
  },

  
  /**
   * 首页 -- 附近拼车
   */
  



  

  /**
   * 
   */
  

  /**
   * 附近乘客
   */
  bindGetPassengerNearby: function () {
    this.setData({
      showType: 0
    })
    wx.showLoading({
      title: '加载中...',
    })
  
  },

})
