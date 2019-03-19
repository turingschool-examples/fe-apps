// const whateverlyDatasets = require('./whateverly/index.js');
// const memoizeDatasets = require('./memoize/index.js');




const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const projectDirectories = ['whateverly', 'memoize'];

const dirs = (paths) => {
  return readdirSync(path).filter(file => {
    return statSync(join(path, file)).isDirectory();
  });
};


console.log(dirs(`${__dirname}/${projectDirectories}`));


// get exports from the each file in every subdirectory









// module.exports = {
//   datasets: [...whateverlyDatasets, ...memoizeDatasets]
// };