'use strict';

function post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

post.prototype.edit = function() {
    alert(this.text);
}

let obj1 = new post('Anton', 'lorem', '06.11.2021');
obj1.edit();

function atachedPost(author, text, date, highlighet) {
    post.call(this, author, text, date);
    this.highlighet = false;
}

atachedPost.prototype = Object.create(post);
atachedPost.prototype.constructor = atachedPost;

atachedPost.prototype.makeTextHighlighet = function(highlighet) {
    alert(this.highlighet = true);
}

let obj2 = new post('Pavel', 'lorem', '05.11.2021', false);
obj2.makeTextHighlighet();