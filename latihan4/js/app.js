var app = new Vue({
  el: "#app",
  data: {
    slugText: "The quick brown $5^&*33(#####) fox jumps over the lazy dog",
  },
  computed: {
    slug: function () {
        return this.slugText
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    },
  },
});
