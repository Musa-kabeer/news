require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const newsRoute = require('./routes/news');

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(
     cors({
          origin: '*',
     })
);

app.use(express.json());
app.use(express.static('/public'));

app.use('/api/v1/news', newsRoute);

app.listen(2000, () => {
     console.log('Server is runnning 2000');
});
