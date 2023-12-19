const appInstance = getApp();
console.log(appInstance.globalData);
const util = require("../../utils/util.js");

Page({
  data: {
    date: "0",
  },
  onLoad: function () {
    this.setData({
      date: util.formatTime(new Date()),
    });
  },
  toOverlay: function (event) {
    wx.navigateTo({
      url: "/pages/overlay/overlay",
      success: function (res) {
        console.log("to overlay");
      },
    });
  },
  toHttp: function (event) {
    wx.navigateTo({
      url: "/pages/http/http",
      success: function (res) {
        console.log("to http");
      },
    });
  },
  toForm: function (event) {
    wx.navigateTo({
      url: "/pages/form/form",
      success: function (res) {
        console.log("to form");
      },
    });
  },
  toAsset: function (event) {
    wx.navigateTo({
      url: "/pages/asset/asset",
      success: function (res) {
        console.log("to asset");
      },
    });
  },
  toComponent: function (event) {
    wx.navigateTo({
      url: "/pages/component/component",
      success: function (res) {
        console.log("to component");
      },
    });
  },
});
