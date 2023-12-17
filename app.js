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
  onLaunch: function () {
  },
})