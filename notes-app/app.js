/**
 * 3.2. Importing NodeJS core modules.
 */
// const fs = require('fs');
// try {
//   fs.writeFileSync('Notes.txt', 'This file has been created by NodeJS!');
// } catch (err) {
//   console.error('Error while writing/appending to the file. \nerr: ', err);
// }

/**
 * 3.2. Importing NodeJS core modules.
 * Challenge.
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
// require('./utils.js');
// const cityName = require('./utils.js');
// console.debug('cityName: ', cityName);

// const city = require('./utils.js');
// console.debug('cityName: ', city);

const sum = require('./utils.js');
console.debug('sum: ', sum(4, -2));

// const utils = require('../utils.js');
// console.debug("city: ", utils.cityName);

/**
 * 3.3. Importing your own files.
 * Challenge.
 */
const getNotes = require('./notes.js');
const msg = getNotes();
console.debug('msg: ', msg);

/**
 * 3.4. Importing npm Modules.
 */
// No ES6
const validator = require('validator');
// ES6
// import validator from 'validator';
//Import only a subset of the library:
// import isEmail from 'validator/lib/isEmail';

const email = 'abc@yopmail.com';
const isValidEmail = validator.isEmail(email);
console.debug('isValidEmail: ', isValidEmail);

const url = 'https://linktr.ee/kevin.mehta';
const isValidUrl = validator.isURL(url);
console.debug('isValidUrl: ', isValidUrl);

/**
 * 3.4. Importing npm Modules.
 * Challenge.
 */
// import chalk from 'chalk';
const chalk = require('chalk');
const greenMsg = chalk.green.bold.inverse('Success!');
// const greenMsg = chalk.red.bold.bgWhite('Success!');
console.debug('greenMsg: ', greenMsg);

// Installed Node package: "nodemon".

/**
 * 4.2. Getting Input from Users.
 */
// console.debug(process.argv);
// console.debug(process.argv[2]);

const command = process.argv[2];
if (command === 'add') {
  console.debug('Adding a note!');
} else if (command === 'remove') {
  console.debug('Removing a note!');
}

// Installed Node package: "yargs".

// Changes for the yargs@17.x (latest).
// const yargs = require('yargs/yargs');
// const { hideBin } = require('yargs/helpers');
// const argv = yargs(hideBin(process.argv)).argv;
// console.debug(argv);

const yargs = require('yargs');
console.debug(process.argv);
console.debug(yargs.argv);

// Customize "yargs" version.
yargs.version('1.0.0');
