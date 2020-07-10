'use strict';

/**
 * Get all shops from database
 */
class GetProductsByCategory {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    setCategoryId(id) {
        this.categoryId = id;
    }

    async execute() {
        return await this.categoryRepository.GetProductsByCategory(this.categoryId);
    }
}

module.exports = GetProductsByCategory;
