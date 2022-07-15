require('../utils.js');
const fs = require('fs');

try {
  // fs.writeFileSync('Notes.txt', 'This file has been created by NodeJS!');
  // fs.appendFileSync(
  //   'Notes.txt',
  //   'The file content has been appended by NodeJS.'
  // );
  // fs.appendFileSync('Notes.txt', '\nI live in Mumbai.');
} catch (err) {
  console.error('Error while writing to the file. \nerr: ', err);
}
