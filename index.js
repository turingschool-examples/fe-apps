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

// Import Mod 2 Datasets
const datasets = require('./mod-2/project-datasets.js');


// APP LOCALS for FITLIT & OVERLOOK & TRAVEL TRACKER
app.locals = {
  sleepData: datasets.find(dataset => dataset.studentName === 'sleep').dataVariables.sleepData,
  activityData: datasets.find(dataset => dataset.studentName === 'activity').dataVariables.activityData,
  hydrationData: datasets.find(dataset => dataset.studentName === 'hydration').dataVariables.hydrationData,
  bookings: datasets.find(dataset => dataset.studentName === 'bookings').dataVariables.bookings,
  trips: datasets.find(dataset => dataset.studentName === 'trips').dataVariables.trips,
  travelers: datasets.find(dataset => dataset.studentName === 'travelers').dataVariables.travelers,
  destinations: datasets.find(dataset => dataset.studentName === 'destinations').dataVariables.destinations,
  gameTimeLeaderBoard: []
}

// Create GET Endpoints
datasets.forEach(dataset => {
  let { project, cohort, studentName, dataVariables } = dataset;
  let pathPrefix = `/api/v1/${project}/${cohort}/${studentName}`;
  let fitLitDatasets = ['sleepData', 'activityData', 'hydrationData'];
  let travelTrackerDatasets = ['travelers', 'trips', 'destinations'];
  let overlookDatasets = ['bookings'];
  let postEndpointDatasets = [...fitLitDatasets, ...overlookDatasets, ...travelTrackerDatasets];
  let deleteEndpointDatasets = ['bookings', 'trips'];
  let putEndpointDatasets = ['trips'];

  Object.keys(dataVariables).forEach(data => {
    app.get(`${pathPrefix}/${data}`, (request, response) => {
      if (postEndpointDatasets.includes(data) || deleteEndpointDatasets.includes(data)) {
        response.send({ [data]: app.locals[data]});
      } else {
        response.send({ [data]: dataVariables[data] });
      }
    });
  });


  deleteEndpointDatasets.forEach(data => {
    app.delete(`${pathPrefix}/${data}`, (request, response) => {
      let newData = request.body;
      app.locals[data] = app.locals[data].filter(el => el.id !== newData.id);
      return response.sendStatus(200);
    });
  });

  putEndpointDatasets.forEach(data => {
    app.put(`${pathPrefix}/${data}`, (request, response) => {
      let newData = request.body;
      let index = app.locals[data].findIndex(el => el.id === newData.id);
      app.locals[data][index] = newData;
      return response.sendStatus(200);
    });
  });

  app.get('/api/v1/gametime/leaderboard', (request, response) => {
    response.send({ highScores: app.locals.gameTimeLeaderBoard });
  })

  app.get('/api/v1/numbers/:num', (request, response) => {
    response.send({ topScore: request.params.num });
  });

  app.post('/api/v1/gametime/leaderboard', (request, response) => {
    const scoreData = request.body;
    const requiredParameters = ['appId', 'playerName', 'playerScore'];

    for (let requiredParameter of requiredParameters) {
      if (!scoreData[requiredParameter]) {
        return response.status(422).json({
          message: `You are missing a required parameter of ${requiredParameter}`
        });
      }
    }

    app.locals.gameTimeLeaderBoard.push(scoreData);
    return response.status(201).json(scoreData);
  });


  // Create POST endpoints for FitLit & Overlook
  postEndpointDatasets.forEach(data => {
    app.post(`${pathPrefix}/${data}`, (request, response) => {
      const newData = request.body;
      const allowedParameters = ['userID', 'date', 'hoursSlept', 'sleepQuality', 'numOunces', 'flightsOfStairs', 'minutesActive', 'numSteps'];

      const necessaryParameters = {
        sleepData: ['userID', 'date', 'hoursSlept', 'sleepQuality'],
        activityData: ['userID', 'date', 'flightsOfStairs', 'minutesActive', 'numSteps'],
        hydrationData: ['userID', 'date', 'numOunces'],
        bookings: ['userID', 'date', 'roomNumber'],
        roomServices: ['userID', 'date', 'food', 'totalCost'],
        destinations: ['id', 'destination', 'estimatedLodgingCostPerDay', 'estimatedFlightCostPerPerson', 'image', 'alt'],
        trips: ['userID', 'destinationID', 'travelers', 'date', 'duration', 'status', 'suggestedActivities']};
 
      let validDate = isValidDate(newData.date);

      if (newData.userID > 50 || newData.userID < 1) {
        return response.status(422).json({
          message: `No user found with ID of ${newData.userID}`
        });
      }

      if (!validDate && data !== 'destinations') {
        return response.status(422).json({
          message: `Invalid date format. Date must be in YYYY/MM/DD format`
        });
      }


      for (let requiredParameter of necessaryParameters[data]) {
        if (newData[requiredParameter] === undefined) {
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
      });

      if (data === 'bookings' || data === 'trips') {
        newData.id = Date.now();
      }
    
      app.locals[data].push(newData);
      return response.status(201).json(newData);
    });
  });

});


function isValidDate(dateString) {
  var regEx = /^\d{4}[\/](0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])$/;
  return regEx.test(dateString);
}

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;