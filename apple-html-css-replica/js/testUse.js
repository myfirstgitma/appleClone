
// Using myMultiplier in Another Modul

//You can import and use it like this in a separate file, say testUse.js


// testUse.js
const { myMultiplier } = require('js/js/myFirst');

const value = myMultiplier(10);
console.log("Value from imported function:", value);