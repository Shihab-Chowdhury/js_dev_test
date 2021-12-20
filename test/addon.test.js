let addon = require("../src/addon.js")

//Enumerate the attached displays
test("Test 1: Expect function to return the number of attached displays.", () => {
	expect(addon.display()).toEqual(expect.any(Number));
});

//Request the displays to sleep
test("Test 2: Expect the function to return true to make sure it passed.", () => {
	expect(addon.sleep()).toBe(true);
});

//Request the displays to wake
test("Test 3: Expect the function to return true to make sure it passed.", () => {
	expect(addon.wake()).toBe(true);
});

//Return the last input time
test("Test 4: Expect the function to return the last input time in seconds.", () => {
	expect(addon.lastInputTime()).toEqual(expect.any(Number));
});