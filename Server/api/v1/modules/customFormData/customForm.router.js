const express = require('express');

const customFormCtrl = require('./customForm.controller');

const logger = require('../../../../logger');

const router = express.Router();

/*
 * Effective URI of the API is POST 
 *
 * API for customform
 */

router.post('/', (req, res) => {
  try {
    const values = req.body;
    customFormCtrl.addMemberForm(values, (err,results) => {
      if (err) {
        logger.debug(err);
        return res.status(400).send(err);
      }else{
      logger.debug('New Data added');
      return res.status(200).send({ message: 'New Data added' });
    }
    });
  } catch (err) {
    logger.debug('Unexpected error in inserting values ', err);
    res.status(500).send({ error: 'Unexpected error occurred, please try again...! ' });
  }
});

router.patch('/', (req, res) => {
  try {
    const values = req.body;
    logger.debug(values);
    customFormCtrl.updateMemberForm(values, (err,results) => {
      if (err) {
        logger.debug(err);
        return res.status(400).send(err);
      }else{
      logger.debug('New Data added');
      return res.status(200).send({ message: 'New Data added' });
    }
    });
  } catch (err) {
    logger.debug('Unexpected error in inserting values ', err);
    res.status(500).send({ error: 'Unexpected error occurred, please try again...! ' });
  }
})

router.get('/', (req, res) => {
  try {
    customFormCtrl.getRegisteredForms((err, results) => {
      if (err) {
        logger.debug(err);
        return res.status(400).send(err);
      }
      //logger.debug(results);
      return res.status(200).send(results);
    });
  } catch (err) {
    res.status(500).send({ error: 'Unexpected error occurred, please try again...!' });
  }
});

router.get('/:email', (req, res) => {
  try {
    const email = req.params.email;
    customFormCtrl.getRegisteredForm(email,(err, results) => {
      if (err) {
        logger.debug(err);
        return res.status(400).send(err);
      }
      //logger.debug(results);
      return res.status(200).send(results);
    });
  } catch (err) {
    res.status(500).send({ error: 'Unexpected error occurred, please try again...!' });
  }
});

module.exports = router;
