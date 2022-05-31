const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Category extends Model {}

Category.init({
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

    //CATEGORY_NAME COLUMN
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
});

module.exports = Category;