const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const datasets = require('./mod-2/project-datasets.js');









// EXPRESS CONFIGURATION
app.use(cors());
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

datasets.forEach(dataset => {
  app.get(`/api/v1/${dataset.cohort}/${dataset.name}`, (request, response) => {
    response.send({ [dataset.name]: dataset.data });
  });
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;