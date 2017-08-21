const express = require('express');

const templateDataCtrl = require('./templateData.controller');

const logger = require('../../../../logger');

const router = express.Router();

router.post('/', (req, res) => {
  try {
    const values = req.body;
    templateDataCtrl.addTemplateData(values, (err) => {
      if (err) {
        logger.debug(err);
        return res.status(400).send(err);
      }
      //logger.debug('New form submitted');
      return res.status(200).send({ message: 'New Data added' });
    });
  } catch (err) {
    logger.debug('Unexpected error in inserting values ', err);
    res.status(500).send({ error: 'Unexpected error occurred, please try again...! ' });
  }
});

/*
 *GET Method - get all states
 */

router.get('/state', (req, res) => {
  try {
    templateDataCtrl.getTemplateData((err, results) => {
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
/*
 *GET Method - get cities of a states
 */

router.get('/:state/city', (req, res) => {
  try {
    const state = req.params.state;
    templateDataCtrl.getTemplateStateData(state,(err, results) => {
      if (err) {
        logger.debug(err);
        return res.status(400).send(err);
      }
      logger.debug(results);
      return res.status(200).send(results);
    });
  } catch (err) {
    res.status(500).send({ error: 'Unexpected error occurred, please try again...!' });
  }
});

module.exports = router;
