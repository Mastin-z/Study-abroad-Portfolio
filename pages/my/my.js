const app = getApp()
Page({

  /**
   * 页面的初始数据*/
   
  data: {
    userinfo:{}
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo})
      
  },
    /**
   * 页面的初始数据
   */
  bindGoPersonal: function () {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
   bindGetMycertificate: function () {
    wx.navigateTo({
      url: '../mycertificate/mycertificate'
    })
  },
  bindGetMyCourse: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  bindGoAboutUs: function () {
    wx.navigateTo({
      url: '../aboutus/aboutus'
    })
  }

})