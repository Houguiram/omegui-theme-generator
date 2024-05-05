import { describe, it, expect } from "bun:test";
import Color from "colorjs.io";
import {
  stringColorToOklch,
  colorToHex,
  colorToShade,
  hasEnoughContrast,
} from "../src/colorUtils";

describe("colorUtils", () => {
  describe("stringColorToOklch", () => {
    it("should convert string color to oklch color", () => {
      const color = stringColorToOklch("#FF0000");
      expect(color.toString()).toBe("oklch(62.796% 0.25768 29.234)");
    });
  });

  describe("colorToHex", () => {
    it("should convert color to hex string", () => {
      const color = new Color("oklch(62.796% 0.25768 29.234)");
      const hex = colorToHex(color);
      expect(hex).toBe("#f00");
    });
  });

  describe("colorToShade", () => {
    it("should create a new color with the specified shade", () => {
      const color = new Color("oklch(62.796% 0.25768 29.234)");
      const shadedColor = colorToShade(color, -0.2);
      expect(shadedColor.toString()).toBe("oklch(42.796% 0.25768 29.234)");
    });
  });

  describe("hasEnoughContrast", () => {
    it("should return true if the colors have enough contrast", () => {
      const color1 = new Color("#000000");
      const color2 = new Color("#FFFFFF");
      const hasEnough = hasEnoughContrast(color1, color2);
      expect(hasEnough).toBe(true);
    });

    it("should return false if the colors do not have enough contrast", () => {
      const color1 = new Color("#000000");
      const color2 = new Color("#333333");
      const hasEnough = hasEnoughContrast(color1, color2);
      expect(hasEnough).toBe(false);
    });
  });
});
