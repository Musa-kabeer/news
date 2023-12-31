const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
     {
          author: String,

          text: String,

          summary: String,

          imageUrl: String,

          title: String,

          category: {
               type: String,
               required: true,
          },
     },
     {
          timestamps: true,
     }
);

module.exports = mongoose.model('new', newsSchema);
