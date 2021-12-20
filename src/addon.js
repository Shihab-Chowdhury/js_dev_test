let addon = require('../build/Release/addon');

//To check return flag for wake function
function sleep() {
    addon.sleepDisplay()
    return true
};

function wake() {
    addon.wakeDisplay()
    return true    
};

//Enumerate the attached displays
console.log("1. Number of attached displays: " + addon.enumDisplayCount());

//Request the displays to sleep
console.log("2. Request the displays to sleep: " + sleep());
// console.log("2. Request the displays to sleep: " + addon.sleepDisplayMessage());
// console.log("2. Request the displays to sleep: ");
// addon.sleepDisplayMessage();

//Request the displays to wake
// setTimeout(()=>{console.log("3. Request the displays to wake: "); }, 2000);
// addon.wakeDisplayMessage()
console.log("3. Request the displays to wake: " + wake());
// console.log("3. Request the displays to wake: " + addon.wakeDisplayMessage());

//Return the last input time



