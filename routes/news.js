const { createNews, getAllNews } = require('../controller/new.controller');

const router = require('express').Router();

router.get('/', getAllNews);
router.post('/', createNews);

module.exports = router;
