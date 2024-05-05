# Omegui theme generator

## Disclaimer

This tool is still in early development and may not work as expected. Please report any issues you encounter.

## Description

Omegui is a set of tools to make Tamagui easier to set up and customize.

This is the theme generator, which allows you to create a theme for Tamagui from a minimal set of colors. You can also use preset themes to get started quickly.

## Usage

### Setup

First, install the package:

```sh
npm install omegui-theme-generator
```

Then, in your `tamagui.config.ts`, set your `themes` to the output of `omeguiThemeGenerator`, or add it to the other themes of your config like so:

```ts
import { config as configBase } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";
import { omeguiThemeGenerator } from "omegui-theme-generator";

export const config = createTamagui({
  ...configBase,
  themes: {
    ...configBase.themes,
    ...omeguiThemeGenerator({
      light: "nord",
      dark: "retro",
    }),
  },
});
```

The theme generator takes a light and a dark theme as arguments, which can be either the name of a preset theme or an object with the colors of your custom theme.

You can then access the colors of your theme in your Tamagui components with those color keys:

- `$primary`
- `$primaryContent`
- `$secondary`
- `$secondaryContent`
- `$accent`
- `$accentContent`
- `$neutral`
- `$neutralContent`
- `$success`
- `$successContent`
- `$warning`
- `$warningContent`
- `$error`
- `$errorContent`
- `$info`
- `$infoContent`

As well as the following keys for stronger shades:

- `$background2`
- `$background3`
- `$primary2`
- `$secondary2`
- `$accent2`
- `$neutral2`
- `$success2`
- `$warning2`
- `$error2`
- `$info2`

### Preset themes

The following preset themes are available (dark themes coming soon):

- `emerald`
- `retro`
- `nord`
- `cyberpunk`
- `pastel`
- `autumn`

### Custom themes

Your custom theme can be as short as this:

```ts
{
  primary: "#ff0000",
  secondary: "#00ff00",
  accent: "#0000ff",
  neutral: "#ffffff",
}
```

For reference of what you can set in your theme, here is the full type definition:

```ts
type InputTheme = {
  primary: string;
  primaryContent?: string;
  secondary: string;
  secondaryContent?: string;
  accent: string;
  accentContent?: string;
  neutral: string;
  neutralContent?: string;
  background?: string;
  background2?: string;
  background3?: string;
  foreground?: string;
  info?: string;
  infoContent?: string;
  success?: string;
  successContent?: string;
  warning?: string;
  warningContent?: string;
  error?: string;
  errorContent?: string;
};
```

## Upcoming

- Support for dark themes
- Wrapper for Tamagui components to add color variants (e.g. primary, secondary, etc.)
- Support for theming border radius, shadows, animations and other properties (aiming for parity with daisyUI themes)
- A visual theme editor to preview Tamagui components with your theme
- Better documentation

## License

MIT
