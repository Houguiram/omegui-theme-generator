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

// TODO check for darkness to set shade correctly
// TODO support dark themes
export const partialThemeToFullTheme = (
  partialTheme: InputTheme
): FullTheme => {
  const background = partialTheme.background ?? "#FFF";
  const foreground = partialTheme.foreground ?? "#000";
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
      partialTheme.background2 ??
      colorToShade(stringColorToOklch(background), -0.1).toString(),
    background3:
      partialTheme.background3 ??
      colorToShade(stringColorToOklch(background), -0.2).toString(),
    primary2: colorToShade(
      stringColorToOklch(partialTheme.primary),
      -0.1
    ).toString(),
    secondary2: colorToShade(
      stringColorToOklch(partialTheme.secondary),
      -0.1
    ).toString(),
    accent2: colorToShade(
      stringColorToOklch(partialTheme.accent),
      -0.1
    ).toString(),
    neutral2: colorToShade(
      stringColorToOklch(partialTheme.neutral),
      -0.1
    ).toString(),
    info,
    info2: colorToShade(stringColorToOklch(info), -0.1).toString(),
    infoContent:
      partialTheme.infoContent ?? colorToContent(info, foreground, background),
    success,
    success2: colorToShade(stringColorToOklch(success), -0.1).toString(),
    successContent:
      partialTheme.successContent ??
      colorToContent(success, foreground, background),
    warning,
    warning2: colorToShade(stringColorToOklch(warning), -0.1).toString(),
    warningContent:
      partialTheme.warningContent ??
      colorToContent(warning, foreground, background),
    error,
    error2: colorToShade(stringColorToOklch(error), -0.1).toString(),
    errorContent:
      partialTheme.errorContent ??
      colorToContent(error, foreground, background),
  };
};
