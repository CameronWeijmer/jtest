const page = require("./page");

test("Add two numbers", () => {
  expect(page.sum(1, 2)).toBe(3);
});
