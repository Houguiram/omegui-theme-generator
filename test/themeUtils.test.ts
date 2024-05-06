import { describe, it, expect } from "bun:test";
import {
  themeColorsToHexTheme,
  partialThemeToFullTheme,
} from "../src/themeUtils";

describe("themeUtils", () => {
  describe("themeColorsToHexTheme", () => {
    it("should convert theme colors to hex theme", () => {
      const theme = {
        primary: "oklch(62.796% 0.25768 29.234)",
        secondary: "oklch(82.796% 0.25768 29.234)",
        accent: "oklch(72.796% 0.25768 29.234)",
        neutral: "oklch(22.796% 0.25768 29.234)",
      };
      const hexTheme = themeColorsToHexTheme(theme);
      expect(hexTheme).toEqual({
        primary: "#f00",
        secondary: "#ffa899",
        accent: "#ff6d5b",
        neutral: "#400",
      });
    });
  });

  describe("partialThemeToFullTheme", () => {
    it("should convert partial theme to full theme", () => {
      const partialTheme = {
        background: "#FFF",
        foreground: "#000",
        neutral: "#888",
        primary: "#FF0000",
        secondary: "#00FF00",
        accent: "#0000FF",
      };
      const fullTheme = partialThemeToFullTheme(partialTheme, "light");
      expect(fullTheme).toEqual({
        accent: "#0000FF",
        accent2: "oklch(35.201% 0.31321 264.05)",
        accentContent: "#FFF",
        background: "#FFF",
        background2: "oklch(90% 0 none)",
        background3: "oklch(80% 0 none)",
        error: "oklch(0.7176 0.221 22.18)",
        error2: "oklch(61.76% 0.221 22.18)",
        errorContent: "#000",
        foreground: "#000",
        info: "oklch(0.7206 0.191 231.6)",
        info2: "oklch(62.06% 0.191 231.6)",
        infoContent: "#000",
        neutral: "#888",
        neutral2: "oklch(52.675% 0 none)",
        neutralContent: "#000",
        primary: "#FF0000",
        primary2: "oklch(52.796% 0.25768 29.234)",
        primaryContent: "#000",
        secondary: "#00FF00",
        secondary2: "oklch(76.644% 0.29483 142.5)",
        secondaryContent: "#000",
        success: "oklch(0.648 0.15 160)",
        success2: "oklch(54.8% 0.15 160)",
        successContent: "#000",
        warning: "oklch(0.8471 0.199 83.87)",
        warning2: "oklch(74.71% 0.199 83.87)",
        warningContent: "#000",
      });
    });
  });
});
