'use strict';

const GenerateUUID = require('./GenerateUUID');

class CreateProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
        this.generateUUID = new GenerateUUID();
    }

    setProductId() {
        this.generateUUID.setBytes(16);
        this.product.id = this.product.id == null ? this.generateUUID.execute() : this.product.id;
    }
    
    setProductCode() {
        this.generateUUID.setBytes(8);
        this.product.code = this.product.code == null ? this.generateUUID.execute() : this.product.code;
    }

    saveProduct() {
        return this.productRepository.save(this.product);
    }

    setProduct(product) {
        this.product = product;
    }

    execute() {
        this.setProductId();
        this.setProductCode();
        var saveProduct = this.saveProduct();

        return saveProduct;
    }
}

module.exports = CreateProduct;
