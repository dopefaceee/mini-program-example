Page({
  data: {
    cur: {},
    position: [
      { value: 'top', text: 'Top' },
      { value: 'left', text: 'Left' },
      { value: 'center', text: 'Center' },
      { value: 'bottom', text: 'Bottom' },
      { value: 'right', text: 'Right' },
    ],
  },
  handlePopup(e) {
    const { item } = e.currentTarget.dataset;

    this.setData(
      {
        cur: item,
      },
      () => {
        this.setData({ visible: true });
      },
    );
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
  onLoad: function () {},
});
