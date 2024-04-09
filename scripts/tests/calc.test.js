const addition  = require("../calc");

// test("", () => {
//     expect(addition()).toBe();
// });

describe("Calculator", () => {
    describe("Addition function", () => {
      test("Should return 42 for 20 + 22", () => {
        expect(addition(20, 22)).toBe(42);
      });
      test("Should return 73 for 42 + 31", () => {
        expect(addition(42, 31)).toBe(73);
      });
      test("multiple input", () => {
        expect(addition(1, 2, 3)).toBe(6);
      });
      test("no parameter", () => {
        expect(addition()).toBe(undefined);
      });
      test("not a number", () => {
        expect(addition(1, "a")).toBe("not a number");
      });
      test("number as string", () => {
        expect(addition(1, "1")).toBe(2);
      });
      test("number as floats", () => {
        expect(addition(1.1, 1.1)).toBe(2.2);
      });
      test("negative numbers", () => {
        expect(addition(-1, -2)).toBe(-3);
      });
    });

    describe("Subtraction function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Division function", () => {

    });
});