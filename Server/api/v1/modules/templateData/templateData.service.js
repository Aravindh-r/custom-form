const model = require('cassandra-driver');

/*
 * db config details from config.js
 */

const connectionString = require('../../../../config').connectionString;

const logger = require('../../../../logger');

const TEMPLATE_TABLE= 'templatedata';

const client = new model.Client({
  contactPoints: [connectionString.contact],
  protocolOptions: { port: connectionString.port },
  keyspace: connectionString.keyspace,
});

function addTemplateData(data, done) {
  const arr = [];
  const query = (`INSERT INTO ${TEMPLATE_TABLE} (state,city) values(?,?)`);   
  data.forEach((val) => {
    arr.push({
      query, params: [val.state,val.city],
    });
  });
  return client.batch(arr, { prepare: true }, (err) => {
    if (!err) {
      done(null);
    } else {
      done(err);
    }
  });
}


function getTemplateData(done) {
  const query = `SELECT state FROM ${TEMPLATE_TABLE} `;
  return client.execute(query, (err, results) => {
    if (!err) {
      if (results.rows.length > 0) {
        //logger.debug('states received');
        done(undefined, results.rows);
      } else {
        done(err, undefined);
      }
    } else {
      done(err, undefined);
    }
  });
}


function getTemplateStateData(state,done) {
  const query = `SELECT * FROM ${TEMPLATE_TABLE} where state='${state}' `;
  return client.execute(query, (err, results) => {
    if (!err) {
      if (results.rows.length > 0) {
        //logger.debug('state details received');
        done(undefined, results.rows);
      } else {
        done(err, undefined);
      }
    } else {
      done(err, undefined);
    }
  });
}


module.exports = {
  addTemplateData,
  getTemplateData,
  getTemplateStateData,
};