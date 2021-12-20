let addon = require("../src/addon.js")

//Test to check if display function returns number
test("Test 1: Expect display function to return the number of attached displays.", () => {
	expect(addon.display()).toEqual(expect.any(Number));
});

//Test to check if display function retuns number greater then 0
test("Test 2: Expect display function to return a number greater then 0.", () => {
	expect(addon.display()).toBeGreaterThan(0);
});

//Request the displays to sleep
test("Test 3: Expect sleep function to return true to make sure it passed.", () => {
	expect(addon.sleep()).toBe(true);
});

//Request the displays to wake
test("Test 4: Expect wake function to return true to make sure it passed.", () => {
	expect(addon.wake()).toBe(true);
});

//Return the last input time
test("Test 5: Expect lastInputTime function to return the last input time in seconds.", () => {
	expect(addon.lastInputTime()).toEqual(expect.any(Number));
});
