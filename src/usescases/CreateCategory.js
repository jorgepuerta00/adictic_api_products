'use strict';

const GenerateUUID = require('./GenerateUUID');

class CreateCategory {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
        this.generateUUID = new GenerateUUID();
    }

    setCategoryId() {
        this.generateUUID.setBytes(16);
        this.category.id = this.category.id == null ? this.generateUUID.execute() : this.category.id;
    }
    
    setCategoryCode() {
        this.generateUUID.setBytes(8);
        this.category.code = this.category.code == null ? this.generateUUID.execute() : this.category.code;
    }

    saveCategory() {
        return this.categoryRepository.save(this.category);
    }

    setCategory(category) {
        this.category = category;
    }

    execute() {
        this.setCategoryId();
        this.setCategoryCode();
        var saveCategory = this.saveCategory();
        return saveCategory;
    }
}

module.exports = CreateCategory;
