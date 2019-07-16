"use strict"

const tutor = require('./factorial.js');

test("[factorial] 3's factorial must be 6", () => {
  expect(tutor.factorial(3)).toBe(6);
});

test("[factorial] 1's factorial must be 1", () => {
  expect(tutor.factorial(1)).toBe(1);
});

test("[factorial] 0's factorial must be undefined", () => {
  expect(tutor.factorial(0)).toBe(undefined);
});