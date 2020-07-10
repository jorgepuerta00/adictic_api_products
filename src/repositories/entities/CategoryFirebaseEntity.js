'use strict';

class CategoryFirebaseEntity {
    constructor(id = null, code, name, image) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.image = image;
    }
}

module.exports = CategoryFirebaseEntity;