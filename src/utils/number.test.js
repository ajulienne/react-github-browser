import { abbreviateNumber } from "./number";

it("Should round decimals", () => {
  expect(abbreviateNumber(10.3)).toBe("10");
});

it("Should not change the number", () => {
  expect(abbreviateNumber(10)).toBe("10");
})

it("Should display 'k' for thousands", () => {
  expect(abbreviateNumber(1000)).toBe("1k")
})

it("Should display 'k' for thousands and round", () => {
  expect(abbreviateNumber(11900)).toBe("12k");
})

it("Should display 'M' for millions", () => {
  expect(abbreviateNumber(1000000)).toBe("1M");
});