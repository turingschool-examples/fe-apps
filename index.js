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


// APP LOCALS for FITLIT & OVERLOOK & WHATS COOKIN & TRAVEL TRACKER

app.locals = {
  sleepData: datasets.find(dataset => dataset.studentName === 'sleep').dataVariables.sleepData,
  activityData: datasets.find(dataset => dataset.studentName === 'activity').dataVariables.activityData,
  hydrationData: datasets.find(dataset => dataset.studentName === 'hydration').dataVariables.hydrationData,
  bookings: datasets.find(dataset => dataset.studentName === 'bookings').dataVariables.bookings,
  trips: datasets.find(dataset => dataset.studentName === 'trips').dataVariables.trips,
  travelers: datasets.find(dataset => dataset.studentName === 'travelers').dataVariables.travelers,
  destinations: datasets.find(dataset => dataset.studentName === 'destinations').dataVariables.destinations,
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
  let travelTrackerDatasets = ['travelers', 'trips', 'destinations'];
  let travelTrackerPostEndpointDatasets = ['trips', 'destinations'];
  let overlookDatasets = ['bookings'];
  let postEndpointDatasets = [...fitLitDatasets, ...overlookDatasets];
  let deleteEndpointDatasets = ['bookings', 'trips'];
  let whatsCookinDatasets = ['wcUsersData'];
  Object.keys(dataVariables).forEach(data => {
    app.get(`${pathPrefix}/${data}`, (request, response) => {
      if (postEndpointDatasets.includes(data) || deleteEndpointDatasets.includes(data) || whatsCookinDatasets.includes(data)) {
        response.send({ [data]: app.locals[data]});
      } else {
        response.send({ [data]: dataVariables[data] });
      }
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


  // CREATE TRAVEL-TRACKER SPECIFIC ENDPOINTS

  // GET Specific Traveler by Id
  app.get(`${pathPrefix}/travelers/:travelerId`, (request, response) => {
    let requestedTraveler = app.locals.travelers.find(traveler => {
      return traveler.id == request.params.travelerId;
    });
    if (requestedTraveler) {
      response.status(200).json(requestedTraveler);
    } else {
      response.status(404).json({
        message: 'User ID provided not found. Try a different ID.'
      });
    };
  });

  // DELETE trips
    app.delete(`${pathPrefix}/trips`, (request, response) => {
      let { id } = request.body;
      if (!id) {
        return response.status(422).json({
          message: 'No id included in request'
        });
      }
      const tripToDelete = app.locals.trips.find(trip => trip.id === id);
      if (!tripToDelete) {
        return response.status(404).json({
          message: `Cannot find trip with id #${id}.`
        })
      } else {
        app.locals.trips = app.locals.trips.filter(trip => trip.id !== id);
        return response.status(200).json({
          message: `Trip #${id} has been deleted`
        })
      }
      app.locals.trips = app.locals[data].filter(el => el.id !== newData.id);
      return response.sendStatus(200);
    });

    // POST new trip or new destination
    travelTrackerPostEndpointDatasets.forEach(data => {
      app.post(`${pathPrefix}/${data}`, (request, response) => {
        let requiredProperties = {
          'trips': {
            'id': 'number',
            'userID': 'number',
            'destinationID': 'number',
            'travelers': 'number',
            'date': 'string',
            'duration': 'number',
            'status': 'string',
            'suggestedActivities': 'object'
          },
          'destinations': {
            'id': 'number',
            'destination': 'string',
            'estimatedLodgingCostPerDay': 'number',
            'estimatedFlightCostPerPerson': 'number',
            'image': 'string',
            'alt': 'string'
          }
        };
        const bodyProperties = Object.keys(request.body);
        // date will only exist for `trips` request
        const { id, date, destinationID } = request.body;
        const missingProperties = Object.keys(requiredProperties[data])
          .filter(property => {
            return !bodyProperties.includes(property)
          })
        const extraProperties = bodyProperties.filter(property => {
          return !Object.keys(requiredProperties[data]).includes(property);
        });

        // Check for missing properties in request:
        if (missingProperties.length) {
          return response.status(422).json({
            message: `Request is missing required properties of ${missingProperties.join(', ')}.`
          })
        }
        // Check for extra properties in the request:
        else if (extraProperties.length) {
          return response.status(422).json({
            message: `Request has extra properties of ${extraProperties.join(', ')}.`
          })
        }

        // Check for correct types of properties
        for (let bodyProperty of bodyProperties) {
          let currentProperty = request.body[bodyProperty];
          let requiredPropertyType = requiredProperties[data][bodyProperty];
          if (!isTypeOf(currentProperty, requiredPropertyType)) {
            return response.status(422).json({
              message: `Request property of ${bodyProperty} must be type ${requiredPropertyType}`
            })
          }
        }

        // Check for valid dates
        if (date && !isValidDate(date)) {
          return response.status(422).json({
            message: `Invalid date format submitted`
          })
        }

        // Check if id already exists
        const existingResource = app.locals[data].find(resource => {
          return resource.id === id;
        })
        if (existingResource) {
          return response.status(422).json({
            message: `Resource with id ${id} already exists.`,
            resource: existingResource
          })
        }

        // Check if destination exists
        if (destinationID) {
          const existantDestination = app.locals.destinations.find(resource => {
            return resource.id === destinationID
          })
          if (!existantDestination) {
            return response.status(422).json({
              message: `Destination with id ${destinationID} doesn't exists.`
            })
          }
        }


        // Add new resource
        app.locals[data].push(request.body);
        return response.status(201).json({
          message: `Resource with id ${id} successfully posted`,
          newResource: request.body
        });
      });
    });

    // POST Update status of a trip
    app.post(`${pathPrefix}/updateTrip`, (request, response) => {
      const { id, status, suggestedActivities } = request.body;
      let indexOfTrip = app.locals.trips.findIndex(el => el.id === id);
      if (indexOfTrip < 0) {
        return response.status(404).json({
          message: `No trip with id ${id} found.`
        })
      }
      if((status === 'pending') || (status === 'approved') || (suggestedActivities.hasOwnProperty('length') && typeof suggestedActivities !== 'string' )) {
        status ? app.locals.trips[indexOfTrip].status = status : null;
        suggestedActivities ? app.locals.trips[indexOfTrip].suggestedActivities = app.locals.trips[indexOfTrip].suggestedActivities.concat(suggestedActivities) : null;
        return response.status(200).json({
          message: `Trip #${id} has been modified`,
          updatedResource: app.locals.trips[indexOfTrip]
        });

      } else {
        return response.status(422).json({
          message: `Invalid request`
        });
      }
    });
});


function isValidDate(dateString) {
  var regEx = /^\d{4}[\/](0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])$/;
  return regEx.test(dateString);
}

function isTypeOf(property, type) {
   return typeof property === type;
}

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;
