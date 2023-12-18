const { qapmMiniSdkStart } = require("new.qapm.js");

function qapmInit() {
  // 此处这些配置请参考 QAPM 接入文档进行修改
  const QAPM_INIT_OPTION = {
    qapm_base_url: "https://ten.sngapm.qq.com", // (必填)请将本域名添加到小程序域名白名单
    app_key: 'b1fa4a05-354', // (必填)填写从qapm的web上获取的app_key
    version: "1.0.1", // (必填)填写小程序的版本号
    user_id: 'smithdeng123', // (必填)用户的id,需要开发者自己设置
  }

  try {
    qapmMiniSdkStart(QAPM_INIT_OPTION);
  } catch (e) {
    console.log("qapm mini sdk error", e);
  }
}
qapmInit();

//app.js
App({
  onLaunch (options) {
    // Do something initial when launch.
  },
  onShow: function() {
    // From the something when page show.
  },
  onReady: function() {
    // From the something when page ready.
  },
  onHide: function() {
    // From the something when page hide.
  },
  onUnload: function() {
    // From the something when page close.
  },
  onPullDownRefresh: function() {
    // From the something when pull down.
  },
  onReachBottom: function() {
    // From the something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // From the something when page scroll
  },
  onResize: function() {
    // From the something when page resize
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})