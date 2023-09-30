const express = require('express')
const router = express.Router();
const bannerController = require('../controller/Banner');

router.route('/')
    .get(bannerController.getBanners)
    .post(bannerController.createBanner)

    module.exports = router