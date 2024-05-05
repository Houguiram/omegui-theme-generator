import Color from "colorjs.io";

// TODO: Restrict type of color utils to make sure they are in the right color space

export const stringColorToOklch = (color: string): Color => {
  const parsedColor = new Color(color);
  parsedColor;
  return parsedColor.to("oklch");
};

export const colorToHex = (color: Color): string => {
  return color.to("srgb").toString({ format: "hex" });
};

export const colorToShade = (color: Color, shade: number): Color => {
  const newColor = color.clone();
  newColor.l += shade;
  return newColor;
};

export const hasEnoughContrast = (color1: Color, color2: Color): boolean => {
  const contrast = color1.contrast(color2, "WCAG21");
  const hasEnoughContrast = contrast > 4.5;
  return hasEnoughContrast;
};
