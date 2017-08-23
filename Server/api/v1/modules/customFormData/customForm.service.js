const model = require('cassandra-driver');

/*
 * db config details from config.js
 */

const connectionString = require('../../../../config').connectionString;

const logger = require('../../../../logger');

const CUSTOMDATA_TABLE = 'customdata';

const client = new model.Client({
  contactPoints: [connectionString.contact],
  protocolOptions: {
    port: connectionString.port
  },
  keyspace: connectionString.keyspace,
});

/*
 *POST Method - insert form into table 
 */

function addMemberForm(data, done) {
  const query = (`INSERT INTO ${CUSTOMDATA_TABLE} (email,username,firstname,lastname,dob,addressline1,city,addressline2,state,pincode,about,like) values(?,?,?,?,?,?,?,?,?,?,?,false)`);
  return client.execute(query, data, (err) => {

    if (!err) {
      //logger.debug('inside');
      done(null);
    } else {
      done(err);
    }
  });
}

function updateMemberForm(data, done) {
  const query = (`UPDATE ${CUSTOMDATA_TABLE} set username = ? , firstname = ?,lastname = ?,addressline1 = ?,city= ? ,state=?,addressline2 = ?,pincode = ?,about = ? WHERE email = ?`);
  return client.execute(query, data, (err) => {
    logger.debug('query inside update',query);
    if (!err) {
      //logger.debug('inside');
      done(null);
    } else {
      done(err);
    }
  });
}

function getRegisteredForms(done) {
  const query = `SELECT * FROM ${CUSTOMDATA_TABLE} `;
  return client.execute(query, (err, results) => {
    if (!err) {
      if (results.rows.length > 0) {
        done(undefined, results.rows);
      } else {
        done(err, undefined);
      }
    } else {
      done(err, undefined);
    }
  });
}

function getRegisteredForm(email, done) {
  const query = `SELECT * FROM ${CUSTOMDATA_TABLE} WHERE email='${email}'`;
  return client.execute(query, (err, results) => {
    if (!err) {
      if (results.rows.length > 0) {
        //logger.debug('Form Received');
        done(undefined, results.rows);
      } else {
        done(err, undefined);
      }
    } else {
      done(err, undefined);
    }
  });
}

function likeMemberForm(data, done) {
  console.log(data);
  const query = (`UPDATE ${CUSTOMDATA_TABLE} set like = true WHERE email = ?`);
  return client.execute(query, data, (err) => {
    logger.debug('query inside update',query);
    if (!err) {
      //logger.debug('inside');
      done(null);
    } else {
      done(err);
    }
  });
}

function unlikeMemberForm(data, done) {
  const query = (`UPDATE ${CUSTOMDATA_TABLE} set like = false WHERE email = ?`);
  return client.execute(query, data, (err) => {
    logger.debug('query inside update',query);
    if (!err) {
      //logger.debug('inside');
      done(null);
    } else {
      done(err);
    }
  });
}


module.exports = {
  addMemberForm,
  getRegisteredForms,
  getRegisteredForm,
  updateMemberForm,
  likeMemberForm,
  unlikeMemberForm,
};