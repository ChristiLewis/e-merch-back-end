const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

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

    //PRODUCTID COLUMN
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'product',
            key: 'id'
        }
    },

    //TAGID COLUMN
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tag',
            key: 'id'
        }
    },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
});

module.exports = ProductTag;