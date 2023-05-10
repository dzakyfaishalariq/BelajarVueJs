var data = {
  imgClass: "img-fluid",
  products: [
    {
      id: "149",
      name: "Kaos Kaki",
      description: "Kaos Kaki Anak",
      price: "2.80",
      image_title: "kaoskaki.jpg",
      image: "https://picsum.photos/200",
    },
    {
      id: "150",
      name: "Sepatu",
      description: "Sepatu Anak",
      price: "20.80",
      image_title: "sepatu.jpg",
      image: "https://picsum.photos/200",
    },
  ],
};

var app = new Vue({
  el: "#app",
  data: data,
});
