const express = require('express');
const cors = require('cors');
const app = express();

// EXPRESS CONFIGURATION
app.use(cors());
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);


// Import Mod 2 Datasets
const datasets = require('./mod-2/project-datasets.js');

// Create Endpoints
datasets.forEach(dataset => {
  let { project, cohort, studentName, dataVariables } = dataset;
  let pathPrefix = `/api/v1/${project}/${cohort}/${studentName}`;

  Object.keys(dataVariables).forEach(data => {
    app.get(`${pathPrefix}/${data}`, (request, response) => {
      response.send({ [data]: dataVariables[data] });
    });
  });
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

// Adding this comment to test push privelage

module.exports = app;