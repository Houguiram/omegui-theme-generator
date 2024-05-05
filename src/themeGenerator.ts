import { presetThemes } from "./presetThemes";
import { InputTheme } from "./themeTypes";
import { partialThemeToFullTheme, themeColorsToHexTheme } from "./themeUtils";

const inputThemeToTamaguiTheme = (inputTheme: InputTheme) => {
  const convertedFullTheme = themeColorsToHexTheme(
    partialThemeToFullTheme(inputTheme)
  );
  return {
    ...convertedFullTheme,
    background: convertedFullTheme.background,
    backgroundHover: convertedFullTheme.background3,
    backgroundPress: convertedFullTheme.background3,
    backgroundFocus: convertedFullTheme.background3,
    borderColor: convertedFullTheme.background3,
    borderColorPress: convertedFullTheme.background3,
    borderColorFocus: convertedFullTheme.background3,
    borderColorHover: convertedFullTheme.neutral,
    color: convertedFullTheme.foreground,
    colorHover: convertedFullTheme.foreground,
    colorPress: convertedFullTheme.foreground,
    colorFocus: convertedFullTheme.foreground,
    shadowColor: "#363A3F1A",
    shadowColorHover: "#363A3F26",
    shadowColorPress: "#363A3F26",
    shadowColorFocus: "#363A3F26",
    placeholderColor: convertedFullTheme.neutral,
  };
};

type ThemeGeneratorInput = keyof typeof presetThemes | InputTheme;

/**
 * Generate a Tamagui theme from the provided input theme.
 * @param light - The light theme, either a string corresponding to a preset theme or a custom theme object.
 * @param dark - The dark theme, either a string corresponding to a preset theme or a custom theme object.
 */
export const omeguiThemeGenerator = ({
  light,
  dark,
}: {
  light: ThemeGeneratorInput;
  dark: ThemeGeneratorInput;
}) => {
  const lightTheme = typeof light === "string" ? presetThemes[light] : light;
  const darkTheme = typeof dark === "string" ? presetThemes[dark] : dark;
  return {
    light: inputThemeToTamaguiTheme(lightTheme),
    dark: inputThemeToTamaguiTheme(darkTheme),
  };
};
