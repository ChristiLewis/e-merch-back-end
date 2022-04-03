const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../../config/connection');

class ProductTag extends Model {}

ProductTag.init({
    //ID COLUMN
    id: {
        //SEQUELIZE DATATYPES OBJECT
        type: DataTypes.INTEGER,
        //SQL NOT NULL:
        allowNull: false,
        //SQL PRIMARY KEY:
        primaryKey: true,
        //SQL AUTO INCREMENT:
        autoIncrement: true
    },

    //PRODUCTTAGNAME COLUMN
    productTagName: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
});

module.exports = ProductTag;