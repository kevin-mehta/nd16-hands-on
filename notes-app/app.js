const fs = require('fs');

try {
  fs.writeFileSync('Notes.txt', 'This file has been created by NodeJS!');
} catch (err) {
  console.error('Error while writing to the file. \nerr: ', err);
}
