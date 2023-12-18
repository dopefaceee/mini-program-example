Page({
  data: {
    list: []
  },
  getListDummy: function() {
    wx.showLoading({
      title: 'Loading ',
    })
    wx.request(
      {
        url: 'https://dummyjson.com/products/1',
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
