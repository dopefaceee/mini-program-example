Page({
  data: {
    state: "idle",
  },
  showPopUp: function (event) {
    this.setData({
      state: "opened",
    });
    wx.showModal({
      title: "Anda Yakin Menolak Iuran",
      content: 'Iuran yang ditolak akan diinformasikan ke pembuat iuran.',
      confirmText: 'Ya, Saya Yakin',
      cancelText: 'Batalkan',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            state: "confirmed",
          });
          console.log("User clicks OK.")
        } else if (res.cancel) {
          this.setData({
            state: "canceled",
          });
          console.log('User clicks to cancel ')
        }
      }
    })
  },
  showAction: function (event) {
    this.setData({
      state: "opened",
    });
    wx.showActionSheet({
      alertText: "Hi!",
      itemList: ['A', 'B', 'C'],
      success: (res) => {
        console.log(res.tapIndex)
        this.setData({
          state: res.tapIndex + " tapped",
        });
      },
      fail: (res) => {
        console.log(res.errMsg)
        this.setData({
          state: res.errMsg,
        });
      }
    })
    
  },
  showLoading: function (event) {
    this.setData({
      state: "loading",
    });
    wx.showLoading({
      title: 'Loading ',
    })
    
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    
  },
  showToast: function (event) {
    this.setData({
      state: "toast",
    });
    wx.showToast({
      title: "Success",
      duration: 2000,
    })    
  },
  onLoad: function () {},
});
