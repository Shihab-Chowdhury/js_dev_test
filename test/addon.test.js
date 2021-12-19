let addon = require("../build/Release/addon")

test("Test 1: "+"Expect function to return the number of attached displays", () => {
	expect(addon.monitor()).toEqual(expect.any(Number));
});