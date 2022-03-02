const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
  {
    username: "Adam",
    password: "pass1234",
  },
  {
    username: "Jennifer",
    password: "pass5678",
  },
  {
    username: "Micheal",
    password: "passpass",
  },
  {
    username: "Susan",
    password: "pass0000",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
