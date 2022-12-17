const Sequelize = require("sequelize");
const sequelize = require("../dbconnection");

let User = sequelize.define("users", {
    id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        notNull: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type : Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps : false
});

module.exports = User;

