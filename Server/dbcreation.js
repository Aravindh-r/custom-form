const model = require('cassandra-driver');
const logger = require('log4js').getLogger();
const async = require('async');
const connectionString = require('./config').connectionString;

const client = new model.Client({
  contactPoints: [connectionString.contact],
});

/*
 * Defining keyspace and table names
 */
const KEYSPACE = [connectionString.keyspace];
const CUSTOMDATA_TABLE = 'customdata';
const TEMPLATE_TABLE= 'templatedata';

const queries = [];


/**
 * Describing Table for Custom Form
 */
queries.push(`CREATE TABLE IF NOT EXISTS ${KEYSPACE}.${CUSTOMDATA_TABLE} ( username text,firstname text,lastname text,email text,dob text,addressline1 text,addressline2 text,city text,state text,pincode text,about text,PRIMARY KEY (email,username));`);
/**
 * Describing Table for templates
 */
queries.push(`CREATE TABLE IF NOT EXISTS ${KEYSPACE}.${TEMPLATE_TABLE} (state text,city set<text>,PRIMARY KEY(state)); `);


function dboperations(query, done) {
  client.execute(query, (error) => {
    if (error) {
      return done(error);
    }
    logger.debug('please wait', '.'.repeat(Math.floor((Math.random() * 10) + 1)));
    return done(undefined, undefined);
  });
}

function keyspaceCreation(done) {
  /**
   * Describing & creating keyspace
   */
  client.execute(`CREATE KEYSPACE IF NOT EXISTS ${KEYSPACE} WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'} `, (err) => {
    if (err) {
      logger.debug('Error in Keyspace Creation, trying again...');
      process.exit(1);
    } else {
      logger.debug('Keyspace Created, Moving ahead...');
      done();
    }
  });
}

function tableCreation(done) {
  /**
   * creating table
   */
  async.each(queries, dboperations, (err) => { // eslint-disable-line consistent-return
    if (err) { logger.debug('Error in DB Creation, try again...', err); process.exit(1); }
    logger.debug('Database Created');
  });
  done();
}

function dbCreate() {
  async.series([keyspaceCreation, tableCreation], (err) => {
    if (err) { logger.debug('Error in Db Creation, try again...', err); process.exit(1); }
  });
}

dbCreate();

module.exports = {
  dbCreate,
};
