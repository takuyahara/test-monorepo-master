const { expect, test } = require("@jest/globals");
const { Greeter } = require("../src/Greeter");

test("Greets in English", () => {
  expect(Greeter.greet()).toBe("Hello world.");
});
