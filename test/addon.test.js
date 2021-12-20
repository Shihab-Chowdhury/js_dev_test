let addon = require("../build/Release/addon")

function wake() {
    if (addon.wakeDisplayMessage()) {
        return true
    } 
    return false;
}

//Enumerate the attached displays
test("Test 1: Expect function to return the number of attached displays", () => {
	expect(addon.enumDisplayCount()).toEqual(expect.any(Number));
});

//Request the displays to sleep
test("Test 2: Expect the function to return true to make sure it passed", () => {
	expect(addon.sleepDisplayMessage()).toBe(true);
});

// //Request the displays to wake
test("Test 3: Expect the function to return true to make sure it passed", () => {
	expect(wake()).toBe(true);
});

//Return the last input time