var app = new Vue({
  el: "#app",
  data: {
    slugText: "The quick brown $5^&*33(#####) fox jumps over the lazy dog",
  },
  // perbedaan computed dan methods:
  //   computed: {
  //     slug: function () {
  //       return this.slugText
  //         .toLowerCase()
  //         .replace(/[^\w ]+/g, "")
  //         .replace(/ +/g, "-") + "-" + this.now();
  //     },
  //   },
  //   methods: {
  //     now: function () {
  //       var date = new Date();
  //       return (
  //         String(date.getHours()) +
  //         String(date.getMinutes()) +
  //         String(date.getSeconds())
  //       );
  //     },
  //   },
  computed: {
    now: function () { // menyebapkan pas di edit tidak berubah karena tidak ada perubahan pada now
      var date = new Date();
      return (
        String(date.getHours()) +
        String(date.getMinutes()) +
        String(date.getSeconds())
      );
    },
    slug: function () {
      return (
        this.slugText
          .toLowerCase()
          .replace(/[^\w ]+/g, "")
          .replace(/ +/g, "-") +
        "-" +
        this.now
      );
    },
  },
});
