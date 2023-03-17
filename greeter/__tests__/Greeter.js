const { expect, test } = require("@jest/globals");
const { Greeter } = require("../src/Greeter");

test("Greets in English", () => {
  expect(Greeter.greet("en")).toBe("Hello world.");
});

test("Greets in French", () => {
  expect(Greeter.greet("fr")).toBe("Bonjour le monde.");
});

test("Greets in Japanese", () => {
  expect(Greeter.greet("ja")).toBe("こんにちは世界。");
});

test("Greets in default language", () => {
  expect(Greeter.greet()).toBe("Hello world.");
});

test("Says nothing", () => {
  expect(Greeter.greet("es")).toBe("");
});
