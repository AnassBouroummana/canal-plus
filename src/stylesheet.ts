import { createTheme } from '@mui/material';

/**
 * App spacing measurement convention
 * Use the getSpacing function below to compute padding and margin
 */
const SPACING_UNIT = 4;
const MEASUREMENT_UNIT = 'px';

export const colorPalette = {
  white: '#FFFFFF',
  primary: '#ec3655',
  secondary: '#0d0d0d',
};

export const fontFamily = {
  main: `'Roboto', sans-serif`,
};

export const fontSize = {
  ultraLarge: '90px',
  XXXLarge: '60px',
  XXLarge: '48px',
  XLarge: '34px',
  large: '24px',
  medium: '20px',
  small: '16px',
  XSmall: '14px',
  XXSmall: '12px',
};

export const fontWeight = {
  heavy: '900',
  ultrabold: '800',
  bold: '700',
  medium: '500',
  normal: '400',
  light: '300',
};

export const lineHeight = {
  large: '36px',
  medium: '24px',
  small: '12px',
};

export const borderRadius = {
  medium: '4px',
  large: '10px',
};

export const getSpacing = (multiplier: number): string =>
  `${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colorPalette.primary,
    },
    secondary: {
      main: colorPalette.secondary,
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});
export default theme;
