'use strict';

class Product {
    constructor(id = null, code, product, related, rating, category) {
        this.id = id;
        this.code = code;
        this.product = product;
        this.related = related;
        this.rating = rating;
        this.category = category;
    }
}
module.exports = Product;