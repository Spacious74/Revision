const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    "tutdb",
    "root",
    "uservishal098",
    {
        host : "localhost",
        dialect : "mysql",
        operatorsAliases : 0,
        pool : {
            max : 5,
            min : 0,
            acquire : 30000,
            idle : 10000
        }
    }
);
module.exports = sequelize;