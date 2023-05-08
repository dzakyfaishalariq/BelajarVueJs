var identitas = {
  maximum: 25,
  produc: [
    {
      id: 1,
      gambar: "https://placeimg.com/640/480/any",
      nama: "Kaos",
      keterangan: "Kaos ini sangat bagus",
      harga: 100000,
      jumlah: 10,
    },
    {
      id: 2,
      gambar: "https://placeimg.com/640/480/any",
      nama: "Celana",
      keterangan: "Celana ini sangat bagus",
      harga: 200000,
      jumlah: 20,
    },
    {
      id: 3,
      gambar: "https://placeimg.com/640/480/any",
      nama: "Jaket",
      keterangan: "Jaket ini sangat bagus",
      harga: 300000,
      jumlah: 30,
    },
    {
      id: 4,
      gambar: "https://placeimg.com/640/480/any",
      nama: "Topi",
      keterangan: "Topi ini sangat bagus",
      harga: 400000,
      jumlah: 40,
    },
    {
      id: 5,
      gambar: "https://placeimg.com/640/480/any",
      nama: "Sepatu",
      keterangan: "Sepatu ini sangat bagus",
      harga: 500000,
      jumlah: 50,
    },
  ],
};
var app = new Vue({
  el: "#app",
  data: identitas,
});
