const { readdirSync, statSync } = require('fs');
const { join, basename, dirname } = require('path');

const projectNames = ['whateverly', 'memoize', 'gametime', 'overlook', 'fitlit', 'whats-cookin'];
const projectPaths = buildProjectPaths(projectNames);
const datasets = importDataFiles(projectPaths);




// Takes in the array of project names and returns an
// array of all the cohort directory paths for each project
// e.g. [
//        '/Users/name/fe-apps/whateverly/1811',
//        '/Users/name/fe-apps/whateverly/1901',
//        etc.
//      ]

function buildProjectPaths(projects) {
  let projectPaths = projects.reduce((acc, project) => {
    let projectDirectory = `${__dirname}/${project}`;
    let cohortDirectories = readdirSync(projectDirectory).map(cohort => {
      return `${projectDirectory}/${cohort}`;
    });

    acc.push(...cohortDirectories);
    return acc;
  }, []);

  return projectPaths;
}





// Takes in the array of cohort directories, reads the files in each
// directory, and returns an array of objects where each object contains
// information about the dataset like so:
// {
//   project: 'whateverly',
//   cohort: '1811',
//   studentName: 'lizAsbell',
//   dataVariables: { smoothies: [], ingredients: [] }
// }

function importDataFiles(directories) {

  let datasetObjects = directories.reduce((acc, dir) => {
    let details = dir.split('/'); // split the current directory path into an array
    let cohort = details.pop(); // get the current cohort from the directory ('1811')
    let project = details.pop(); // get the current project from the directory ('whateverly')
    let dataFiles = readdirSync(dir); // get an array of all files in the directory

    dataFiles = dataFiles.filter(file => !(/(^|\/)\.[^\/\.]/g).test(file));
    dataFiles.forEach(dataFile => {
      let studentName = `${basename(dataFile, '.js')}`; // get the student name from the file name ('lizAsbell')
      let filePath = join(dir, dataFile); // build the file path so we can require in its exports
      acc.push({
        project,
        cohort,
        studentName,
        dataVariables: require(filePath)
      });
    });

    return acc;
  }, []);

  return datasetObjects;
}




module.exports = datasets;
