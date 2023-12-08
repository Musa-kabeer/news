const News = require('../models/news.js');

const getAllNews = async (req, res, next) => {
     try {
          const news = await News.find();

          res.status(200).json({
               status: 'success',
               news,
          });
     } catch (err) {
          res.status(500).json(err);
     }
};

const createNews = async (req, res, next) => {
     try {
          const news = await News.create(req.body);

          res.status(200).json({
               status: 'success',
               news,
          });
     } catch (err) {
          res.status(500).json(err);
     }
};

module.exports = { getAllNews, createNews };
