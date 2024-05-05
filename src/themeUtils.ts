import type { FullTheme, InputTheme } from "./themeTypes";
import {
  colorToHex,
  colorToShade,
  hasEnoughContrast,
  stringColorToOklch,
} from "./colorUtils";

export const themeColorsToHexTheme = (theme: InputTheme): any => {
  return Object.keys(theme).reduce((acc, key) => {
    return {
      ...acc,
      // @ts-ignore - TODO typescript magic to make this work
      [key]: colorToHex(stringColorToOklch(theme[key])),
    };
  }, {});
};

const colorToContent = (
  color: string,
  foreground: string,
  background: string
): string => {
  const goodContrast = hasEnoughContrast(
    stringColorToOklch(color),
    stringColorToOklch(foreground)
  );
  if (goodContrast) {
    return foreground;
  }
  return background;
};

const createShade = (
  color: string,
  shade: number,
  themeType: "light" | "dark"
) => {
  const shadeValue = 0.1 * (themeType === "light" ? -shade : shade);
  return colorToShade(stringColorToOklch(color), shadeValue).toString();
};

// TODO check for darkness to set shade correctly
// TODO support dark themes
export const partialThemeToFullTheme = (
  partialTheme: InputTheme,
  themeType: "light" | "dark"
): FullTheme => {
  const background =
    partialTheme.background ?? (themeType === "light" ? "#FFF" : "#000");
  const foreground =
    partialTheme.foreground ?? (themeType === "light" ? "#000" : "#FFF");
  const info = partialTheme.info ?? "oklch(0.7206 0.191 231.6)";
  const success = partialTheme.success ?? "oklch(0.648 0.15 160)";
  const warning = partialTheme.warning ?? "oklch(0.8471 0.199 83.87)";
  const error = partialTheme.error ?? "oklch(0.7176 0.221 22.18)";
  return {
    ...partialTheme,
    background,
    foreground,
    neutralContent:
      partialTheme.neutralContent ??
      colorToContent(partialTheme.neutral, foreground, background),
    primaryContent:
      partialTheme.primaryContent ??
      colorToContent(partialTheme.primary, foreground, background),
    secondaryContent:
      partialTheme.secondaryContent ??
      colorToContent(partialTheme.secondary, foreground, background),
    accentContent:
      partialTheme.accentContent ??
      colorToContent(partialTheme.accent, foreground, background),
    background2:
      partialTheme.background2 ?? createShade(background, 1, themeType),
    background3:
      partialTheme.background3 ?? createShade(background, 2, themeType),
    primary2: createShade(partialTheme.primary, 1, themeType),
    secondary2: createShade(partialTheme.secondary, 1, themeType),
    accent2: createShade(partialTheme.accent, 1, themeType),
    neutral2: createShade(partialTheme.neutral, 1, themeType),
    info,
    info2: createShade(info, 1, themeType),
    infoContent:
      partialTheme.infoContent ?? colorToContent(info, foreground, background),
    success,
    success2: createShade(success, 1, themeType),
    successContent:
      partialTheme.successContent ??
      colorToContent(success, foreground, background),
    warning,
    warning2: createShade(warning, 1, themeType),
    warningContent:
      partialTheme.warningContent ??
      colorToContent(warning, foreground, background),
    error,
    error2: createShade(error, 1, themeType),
    errorContent:
      partialTheme.errorContent ??
      colorToContent(error, foreground, background),
  };
};
