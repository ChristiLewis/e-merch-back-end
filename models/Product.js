// import important parts of sequelize library
const { Model, DataTypes, } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init({
    // define columns
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

    //PRODUCTNAME COLUMN
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    //PRICE COLUMN
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },

    //STOCK COLUMN
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            isNaN: false
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'category',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

module.exports = Product;