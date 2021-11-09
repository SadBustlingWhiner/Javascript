'use strict';

class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        alert(this.price - this.price * 0.25);
    }
}

let obj1 = new product('Dress', '100');
obj1.make25PercentDiscount();
