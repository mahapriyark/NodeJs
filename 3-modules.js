//Modules
//CommonJs , every file is module (by default)
//Modules - Encapsulated code (only share minimum)



const names = require('./4-names');
// console.log(names);

const sayHi = require('./5-utils');
sayHi(names.maha); 
sayHi(names.priya);
sayHi('mahapriya');

const data = require('./6-alternative-flavour');
console.log(data);

require('./7-mind-grenade');