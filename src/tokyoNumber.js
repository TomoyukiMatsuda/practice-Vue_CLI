export const tokyoNumber = {
  data() {
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0,
    }
  },
  filters: {
    lowCase(val) {
      return val.toLowerCase();
    }
  }
};