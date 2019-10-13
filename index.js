const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// EXPRESS CONFIGURATION
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);


// APP LOCALS for FITLIT
app.locals = {
  sleepData: [],
  activityData: [],
  hydrationData: []
}


// Import Mod 2 Datasets
const datasets = require('./mod-2/project-datasets.js');

// Create GET Endpoints
datasets.forEach(dataset => {
  let { project, cohort, studentName, dataVariables } = dataset;
  let pathPrefix = `/api/v1/${project}/${cohort}/${studentName}`;
  let fitLitDatasets = ['sleepData', 'activityData', 'hydrationData'];

  Object.keys(dataVariables).forEach(data => {
    app.get(`${pathPrefix}/${data}`, (request, response) => {
      if (fitLitDatasets.includes(data)) {
        response.send({ [data]: dataVariables[data].concat(app.locals[data])});
      } else {
        response.send({ [data]: dataVariables[data] });
      }
    });
  });

  // Create POST endpoints for FitLit
  fitLitDatasets.forEach(data => {
    app.post(`${pathPrefix}/${data}`, (request, response) => {
      const newData = request.body;
      app.locals[data].push(newData);
      response.status(201).json(newData);
    });
  });

});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;