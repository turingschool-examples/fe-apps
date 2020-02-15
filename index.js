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


// APP LOCALS for FITLIT & OVERLOOK & WHATS COOKIN
app.locals = {
  sleepData: datasets.find(dataset => dataset.studentName === 'sleep').dataVariables.sleepData,
  activityData: datasets.find(dataset => dataset.studentName === 'activity').dataVariables.activityData,
  hydrationData: datasets.find(dataset => dataset.studentName === 'hydration').dataVariables.hydrationData,
  bookings: datasets.find(dataset => dataset.studentName === 'bookings').dataVariables.bookings,
  gameTimeLeaderBoard: [],
  ingredientsData: datasets.find(dataset => dataset.studentName === 'ingredients').dataVariables.ingredients,
  recipesData: datasets.find(dataset => dataset.studentName === 'recipes').dataVariables.recipes,
  wcUsersData: datasets.find(dataset => dataset.project === 'whats-cookin' && dataset.studentName === 'users').dataVariables.wcUsersData
}

// Create GET Endpoints
datasets.forEach(dataset => {
  let { project, cohort, studentName, dataVariables } = dataset;
  let pathPrefix = `/api/v1/${project}/${cohort}/${studentName}`;
  let fitLitDatasets = ['sleepData', 'activityData', 'hydrationData'];
  let overlookDatasets = ['bookings'];
  let whatsCookinDatasets = ['wcUsersData'];
  let postEndpointDatasets = [...fitLitDatasets, ...overlookDatasets];
  let deleteEndpointDatasets = ['bookings'];
  Object.keys(dataVariables).forEach(data => {
    app.get(`${pathPrefix}/${data}`, (request, response) => {
      if (postEndpointDatasets.includes(data) || deleteEndpointDatasets.includes(data) || whatsCookinDatasets.includes(data)) {
        response.send({ [data]: app.locals[data]});
      } else {
        response.send({ [data]: dataVariables[data] });
      }
    });
  });


  deleteEndpointDatasets.forEach(data => {
    app.delete(`${pathPrefix}/${data}`, (request, response) => {
      let newData = request.body;
      app.locals.bookings = app.locals.bookings.filter(booking => booking.id !== newData.id);
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

  // Create POST endpoint for Whats Cookin:
  /*
  The format of the other postEndpointDatasets didn't work for this project,
  So I made another modeled after it - KW
  */
whatsCookinDatasets.forEach(data => {
  app.post(`${pathPrefix}/${data}`, (request, response) => {
    const newData = request.body;
    const allowedParameters = ['userID', 'ingredientID', 'ingredientModification'];
    const necessaryParameters = ['userID', 'ingredientID', 'ingredientModification'];
    const wcUsers = app.locals.wcUsersData;
    if (newData.userID < 1 || newData.userID > 49) {
      return response.status(422).json({
        message: `No user found with ID ${newData.userID}`
      })
    }

    for (let requiredParameter of necessaryParameters) {
      if (!newData[requiredParameter]) {
        return response.status(400).json({
          message: `You are missing a required parameter of ${requiredParameter}`
        })
      }
    }

    let indexOfUserToModify = wcUsers.findIndex(user => user.id === newData.userID);
    let indexOfPantryItemToModify = wcUsers[indexOfUserToModify].pantry.findIndex(pantryItem => {
      return pantryItem.ingredient === newData.ingredientID
    });
    let itemToChange = wcUsers[indexOfUserToModify].pantry[indexOfPantryItemToModify];
    let changedAmount;
    if (itemToChange) {
      changedAmount = itemToChange.amount + newData.ingredientModification;
    }


    if (indexOfPantryItemToModify < 0 && newData.ingredientModification > 0) {
      wcUsers[indexOfUserToModify].pantry.push({
        ingredient: newData.ingredientID,
        amount: newData.ingredientModification
      })
      return response.status(201).json({
        message: `${newData.ingredientModification} units of item # ${newData.ingredientID} were added to user ${newData.userID}'s pantry'`
      })
    } else if ( (indexOfPantryItemToModify < 0 && newData.ingredientModification < 0) || changedAmount < 0) {
      return response.status(422).json({
        message: `The user doesn't have enough of this item.`
      })
    } else {
      itemToChange.amount += newData.ingredientModification;
      return response.status(201).json({
        message: `User # ${newData.userID} has ${itemToChange.amount} units of item # ${itemToChange.ingredient}`
      })
    }
  });
})

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
        roomServices: ['userID', 'date', 'food', 'totalCost']

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
      });

      if (data === 'bookings') {
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
