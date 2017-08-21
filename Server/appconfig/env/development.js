// config for cassandra
const connectionString = { 
  keyspace: 'customform',
  contact: '127.0.0.1',
  port: '9042',
};

 // config for log4js
const loggerConfig = {
  appenders: [{
    type: 'console',
  }, {
    type: 'file',
    filename: './../logs/logger.log',
    category: 'form',
  }],
};

module.exports = {
   connectionString,
   loggerConfig,
 };

