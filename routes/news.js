const router = require('express').Router();
const {
     createNews,
     getAllNews,
     getSearch,
} = require('../controller/new.controller');

router.get('/', getAllNews);
router.get('/search', getSearch);
router.post('/', createNews);

module.exports = router;
