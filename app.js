var items = [
  {
    name: "鉛筆",
    price: 300,
    quantity: 0,
  },
  {
    name: "ノート",
    price: 400,
    quantity: 0,
  },
  {
    name: "消しゴム",
    price: 500,
    quantity: 0,
  },
];

var vm = new Vue({
  el: "#app",
  data: {
    items: items,
    arr: ["い", "ろ", "は"],
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
      }, 0);
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.08);
    },
    sumFunc: function () {
      return this.item * 3;
    },
    canBuy: function () {
      return this.totalPrice >= 1000;
    },
    errorMessageClass: function () {
      return {
        error: !this.canBuy,
      };
    },
    errorMessageStyle: function () {
      return {
        boder: this.canBuy ? "" : "1px solid red",
        color: this.canBuy ? "" : "red",
      };
    },
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return "0";
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, `$1,`);
    },
    dubleNumber: function (value) {
      return value.toString() + " 円";
    },
  },
  methods: {
    doBuy: function () {
      alert(this.totalPriceWithTax + "円のお買い上げ！");
      this.items.forEach(function (item) {
        item.quantity = 0;
      });
    },
  },
});
window.vm = vm;
