import { add } from ".";

it("should add", () => {
  expect(add(1, 2)).toEqual(3);
});

it("should add more numbers", () => {
  expect(add(2, 3)).toEqual(5);
});
