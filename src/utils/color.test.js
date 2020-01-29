import { getContrast } from "./color";

it("Sould return white on a black background", () => {
  expect(getContrast("#000000")).toBe("white");
});

it("Sould return black on a white background", () => {
  expect(getContrast("#FFFFFF")).toBe("black");
});