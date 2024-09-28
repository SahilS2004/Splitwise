const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('splitwise_db', 'root', 'sahil@1239', {
    host: 'localhost',
    dialect: 'mysql'
    // logging: 1
});

const check_connection = async ()=>{try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

check_connection()

const db = {
    sequelize : sequelize
}
db.users = require('./user_model.js')(sequelize, Sequelize);


module.exports = db;