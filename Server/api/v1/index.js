const router = require('express').Router();

router.use('/customform', require('./modules/customFormData'));

router.use('/templates', require('./modules/templateData'));

module.exports = router;