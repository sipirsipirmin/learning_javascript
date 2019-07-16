const tutor = require('./getPerimeterAndArea.js');

test("getArea test with 3, 5", () => {
  expect(tutor.getArea(3, 5)).toBe(15);
});

test("getPerimeter test with 3, 5", () => {
  expect(tutor.getPerimeter(3, 5)).toBe(16);
});

test("getArea with 1001, 4", () => {
  expect(tutor.getArea(1001, 4)).toBe(NaN);
});

test("getPerimeter with 1001, 4", () => {
  expect(tutor.getArea(1001, 4)).toBe(NaN);
});

test("getArea with -2, 4", () => {
  expect(tutor.getArea(-2, 4)).toBe(NaN);
});

test("getPerimeter with -2, 4", () => {
  expect(tutor.getPerimeter(-2, 4)).toBe(NaN);
});
