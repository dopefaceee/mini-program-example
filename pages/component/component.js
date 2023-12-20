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

  showLoading() {
    this.setData({
      isLoading: true,
    });

    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      // Set isLoading to false when the operation is complete
      this.setData({
        isLoading: false,
      });
    }, 2000); // Replace with your actual asynchronous operation
  }
});
