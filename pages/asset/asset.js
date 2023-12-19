Page({
    data: {
      list: []
    },
    loadFont: function () {
      wx.loadFontFace({
        family: "Sofia",
        source: 'url("http://themes.googleusercontent.com/static/fonts/abel/v3/N59kklKPso9WzbZH9jwJSg.ttf")',
        success: function (res) {
          console.log(res.status);
        },
        fail: function (res) {
          console.log(res.status);
        },
        complete: function (res) {
          console.log(res.status);
        },
      });
    },
    onLoad: function () {},
    onReady: function() {
      wx.loadFontFace({
        family: "Sofia",
        source: 'url("https://fonts.zzh.coderai.cn/FZKTK.TTF")',
        success: function (res) {
          console.log(res.status);
        },
        fail: function (res) {
          console.log(res.status);
        },
        complete: function (res) {
          console.log(res.status);
        },
      }); 
    }
  });
  