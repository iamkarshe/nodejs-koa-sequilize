require('dotenv').config()
const Sequelize = require('sequelize')

const configuration = {
  jwtKey: "admin@cmp@key",

  smtpUserName: "noreply.gateacademy@gmail.com",
  smtpUserPass: "noreplyGATE2019",

  smsGateway: "http://merasandesh.com/api/sendsms",
  smsUserName: "gatead",
  smsPassword: "Gate2019@",
  smsSenderID: "SUPORT",

  apiPrefix: "/api/v1"
};

// Setting up the database connection
let dbName = process.env.DB_NAME;
let dbUser = process.env.DB_USER;
let dbPassword = process.env.DB_PASS;
let dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
});
module.exports.sequelize = sequelize;

module.exports.get = function(key) {
  return configuration[key] ? configuration[key] : null;
}