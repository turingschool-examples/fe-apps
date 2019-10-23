const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// EXPRESS CONFIGURATION
app.use(cors());
app.options('*', cors())
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
      const allowedParameters = ['userID', 'date', 'hoursSlept', 'sleepQuality', 'numOunces', 'flightsOfStairs', 'minutesActive', 'numSteps'];

      const necessaryParameters = {
        sleepData: ['userID', 'date', 'hoursSlept', 'sleepQuality'],
        activityData: ['userID', 'date', 'flightsOfStairs', 'minutesActive', 'numSteps'],
        hydrationData: ['userID', 'date', 'numOunces']
      };

      let validDate = isValidDate(newData.date);

      if (newData.userID > 50 || newData.userID < 1) {
        return response.status(422).json({
          message: `No user found with ID of ${newData.userID}`
        });
      }

      if (!validDate) {
        return response.status(422).json({
          message: `Invalid date format. Date must be in YYYY/MM/DD format`
        });
      }


      for (let requiredParameter of necessaryParameters[data]) {
        if (!newData[requiredParameter]) {
          return response.status(422).json({
            message: `You are missing a required parameter of ${requiredParameter}`
          });
        }
      }

      let newDataKeys = Object.keys(newData);

      newDataKeys.forEach(key => {
        if (!necessaryParameters[data].includes(key)) {
          return response.status(422).json({
            message: `Invalid key for ${data} passed through: ${key}`
          });
        }
      })
    
      app.locals[data].push(newData);
      return response.status(201).json(newData);
    });
  });

});


function isValidDate(dateString) {
  var regEx = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  return regEx.test(dateString);
}

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;