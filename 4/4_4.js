'use strict';

class post {
    constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
edit() {
    alert(this.text);
}
}

class atachedPost extends post{
    constructor(author, text, date, highlighet) {
        super(author, text, date);
        this.highlighet = false;
    }
    makeTextHighlighet() {
        alert(this.highlighet = true);

    }
}

let obj1 = new post('Anton', 'lorem', '06.11.2021');
obj1.edit();

let obj2 = new post('Pavel', 'lorem', '05.11.2021');
obj2.makeTextHighlighet();