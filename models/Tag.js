const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init({
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

    //TAGNAME COLUMN
    tagName: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
});

module.exports = Tag;