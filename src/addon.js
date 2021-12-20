let addon = require('../build/Release/addon');

//Enumerate the number of attached displays
function display() {
    try {
        let result = addon.enumDisplayCount();
        return result
    } catch (error) {
        console.log();
    }
}

//Request the displays to sleep
function sleep() {
    try {
        addon.sleepDisplay();
        return true
    } catch (error) {
        console.log(error);
    }
};

//Request the displays to wake
function wake() {
    try {
        addon.wakeDisplay();
        return true    
    } catch (error) {
        console.log(error);
    }
};

//Return the last input time
function lastInputTime(params) {
    try {
        let result = addon.lastInputTime();
        return result
    } catch (error) {
        console.log(error);
    }
}

//Enumerate the number of attached displays
console.log("1. Number of attached displays: " + display());

//Request the displays to sleep
console.log("2. Request the displays to sleep: " + sleep());

//Request the displays to wake
console.log("3. Request the displays to wake: " + wake());

//Return the last input time
console.log("4. Last Input Time: " + lastInputTime() + " seconds");

//export all the functions
module.exports = {
    display, 
    sleep, 
    wake,
    lastInputTime
}

