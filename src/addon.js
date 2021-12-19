var addon = require('../build/Release/addon');

//Enumerate the attached displays
console.log("1. Number of attached displays: " + addon.enumDisplayCount());

//Request the displays to sleep
console.log("2. Request the displays to sleep: " + addon.sleepDisplayMessage() );

//Request the displays to wake
// setTimeout(()=>{console.log("3. Request the displays to wake: "); }, 2000);
// addon.wakeDisplayMessage()
//Return the last input time