const fate = require('.');

const forceYesterday = new Date(Date.now()-1000*60*60*24);
fate(forceYesterday);

console.log('will be forced date or tomorrow', new Date());

console.log('will be normal date', new Date());

const force15DaysFromNow = new Date(Date.now()+1000*60*60*24*15);
fate(force15DaysFromNow)

console.log('will be forced date of 15 days from now', new Date());

console.log('will be normal date', new Date());
