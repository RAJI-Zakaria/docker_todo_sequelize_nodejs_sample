// db.js
const { Sequelize } = require("sequelize");
const config = require('./config/config')['development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: 'sqlite',
    define: {
      timestamps: false,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Todo = require("./models/todo.js")(sequelize, Sequelize);

module.exports = db;
