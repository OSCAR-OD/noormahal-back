const express = require('express')
const router = express.Router();
const cardController = require('../controller/Card');

router.route('/')
    .get(cardController.getCards)
    .post(cardController.createCard)

    module.exports = router