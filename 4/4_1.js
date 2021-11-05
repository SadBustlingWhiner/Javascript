'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    alert(this.price - this.price * 0.25);
}

let obj1 = new Product('Dress', '100');
obj1.make25PercentDiscount();