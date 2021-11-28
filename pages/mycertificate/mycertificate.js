Page({
  data: {
    array: ['男', '女'],
    index: 0,
    userInfo: [],
    imgUrl: null,
  },
  onLoad: function (options) {
    var vm = this;

  },

  //事件处理函数 
  bindViewTapPark: function (e) {
    var page = e.currentTarget.dataset.page;
    wx.redirectTo({
      url: '../' + page + '/' + page
    })
  },
  setPhotoInfo: function (e) {
    var that = this;

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      
        that.setData({
          src: tempFilePaths
        })
      }
    });
  },
  setPhotoInfo2: function (e) {
    var that = this;

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      
        that.setData({
          src2: tempFilePaths
        })
      }
    });
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    var sex
    if(e.detail.value=="女"){
      sex=2
    }else{
       sex=1
    }
  },
   bindKeyInput: function(e) {
     
   ;
  },
 
})