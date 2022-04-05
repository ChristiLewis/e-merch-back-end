// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//SET ESTABLISHED ASSOCIATIONS

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    as: 'tagged_products',
    foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    as: 'tagged_products',
    foreignKey: 'tag_id',
});

//MAKE ADDITIONAL ONE: MANY ASSOCIATIONS FOR FUTURE FUNCTIONS
ProductTag.belongsTo(Product, {
    foreignKey: 'product_id'
});

ProductTag.brlongsTo(Tag, {
    foreignKey: 'tag_id'
});

Product.hasMany(ProductTag, {
    foreignKey: 'product_id'
});

Tag.hasMany(ProductTag, {
    foreignKey: 'tag_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};