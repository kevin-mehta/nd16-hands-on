/**
 * 3.2. Importing NodeJS core modules.
 */
const fs = require('fs');
try {
  fs.writeFileSync('Notes.txt', 'This file has been created by NodeJS!');
  fs.appendFileSync(
    'Notes.txt',
    'The file content has been appended by NodeJS.'
  );
  fs.appendFileSync('Notes.txt', '\nI live in Mumbai.');
} catch (err) {
  console.error('Error while writing/appending to the file. \nerr: ', err);
}

/**
 * 3.3. Importing your own files.
 */
// require('../utils.js');
const utils = require('../utils.js');
console.debug("cityName: ", cityName);