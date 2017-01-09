const Sequelize = require('sequelize');
const sequelize = require('./../database');

const Messages = sequelize.define('messages', {
  author: {
    type: Sequelize.STRING(1000),
    field: 'message_author',
  },
  message: {
    type: Sequelize.STRING(1000),
    field: 'message_message',
  },
}, {
  freezeTableName: true
});

sequelize.sync();

module.exports = Messages;
