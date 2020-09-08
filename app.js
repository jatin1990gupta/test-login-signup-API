const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost/apidata')
  .then(result => {
    console.log('Connected!')
  })
  .catch(err => {
    console.log(err);
  })

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/auth/', authRoutes);

app.listen(port, () => {
  console.log(`Server started successfully at ${port}`);
});