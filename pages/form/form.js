Page({
  data: {
    inputValue: 0,
    list: []
  },
  bindIndex: function (e) {
    console.log(e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
  },
  getListDummy: function(e) {
    wx.showLoading({
      title: 'Loading ',
    })
    wx.request(
      {
        url: 'https://dummyjson.com/products/' + e.currentTarget.dataset.index,
        header: {
          'content-type': 'application/json'
        },
        method: "GET",
        success: (res) => {
          console.log(res.data)
          this.setData({
            'data.list': [res.data]
          })
          wx.hideLoading()
        }
      }
    )
  },
  onLoad: function () {},
});
