const appInstance = getApp()
console.log(appInstance.globalData)

Page({
  data: {
    current: "1",
  },
  onLoad: function () {},
  toOverlay: function (event) {
    wx.navigateTo({
      url: '/pages/overlay/overlay',
      success: function(res) {
        console.log("to overlay")
      }
    })
  }
});
