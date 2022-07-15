/**
 * 3.3. Importing your own files.
 */
console.debug('"utils.js" called.');
const cityName = 'Mumbai';
const add = function (a, b) {
  return a + b;
};
module.exports = add;
