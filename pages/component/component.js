Page({
  data: {
    list: [],
    isLoading: false
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
