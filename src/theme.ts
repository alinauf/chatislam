import {createTheme} from '@shopify/restyle';

const palette = {
  // True White.
  White: 'hsla(0, 0%, 100%, 1)',
  White900: 'hsla(0, 0%, 100%, 0.95)',
  White800: 'hsla(0, 0%, 100%, 0.75)',
  White700: 'hsla(0, 0%, 100%, 0.60)',
  White400: 'hsla(0, 0%, 100%, 0.33)',
  White200: 'hsla(0, 0%, 100%, 0.16)',
  White100: 'hsla(0, 0%, 100%, 0.05)',

  // Slate
  Slate100: 'hsla(210, 40%, 96%, 1)',
  Slate200: 'hsla(214, 32%, 91%, 1)',
  Slate300: 'hsla(213, 27%, 84%, 1)',
  Slate400: 'hsla(215, 20%, 65%, 1)',
  Slate500: 'hsla(215, 16%, 47%, 1)',
  Slate600: '#475569',
  Slate800: 'hsla(217, 33%, 17%, 1)',

  Amber50: 'hsla(48, 100%, 96%, 1)',
  Amber100: 'hsl(48, 96%, 89%)',
  Amber300: 'hsl(46, 97%, 65%)',
  Amber600: 'hsla(32, 95%, 44%, 1)',

  // Grays
  Gray800: 'hsl(228, 18%, 34%)',
  Gray700: 'hsl(230, 14%, 48%)',
  Gray600: 'hsl(230, 19%, 63%)',
  Gray500: 'hsl(231, 20%, 80%)',
  Gray400: 'hsl(231, 20%, 80%)',
  Gray300: 'hsl(228, 25%, 92%)',
  Gray200: 'hsl(225, 29%, 95%)',
  Gray100: 'hsl(180, 5%, 96%)',

  // (Russian) Black: Use where black is used.
  Black: 'hsla(224, 46%, 8%, 1)',
  Black900: 'hsla(224, 46%, 8%, 0.87)',
  Black800: 'hsla(224, 46%, 8%, 0.75)',
  Black700: 'hsla(224, 46%, 8%, 0.60)',
  Black600: 'hsla(224, 46%, 8%, 0.48)',
  Black500: 'hsla(224, 46%, 8%, 0.40)',
  Black400: 'hsla(224, 46%, 8%, 0.33)',
  Black300: 'hsla(224, 46%, 8%, 0.24)',
  Black200: 'hsla(224, 46%, 8%, 0.16)',
  Black100: 'hsla(224, 46%, 8%, 0.05)',

  BackgroundGray: 'hsl(180, 5%, 96%)',
  BackgroundGray300: 'hsl(192, 11%, 91%)',

  // Possible Danger Color
  RedOrange: 'hsla(0, 91%, 55%, 1)',
  RedOrange200: 'hsla(0, 91%, 55%, 0.16)',
  RedOrange700: 'hsla(0, 91%, 55%, 0.7)',
  RedOrange900: 'hsla(0, 91%, 55%, 0.87)',

  // Other Reds
  RadicalRed: 'hsla(345, 100%, 60%, 1)',
  RadicalRed100: 'hsla(345, 100%, 60%, 0.05)',
  RadicalRed200: 'hsla(345, 100%, 60%, 0.15)',
  RadicalRed500: 'hsla(345, 100%, 60%, 0.5)',
  RadicalRed700: 'hsla(345, 100%, 60%, 0.7)',
  RadicalRed900: 'hsla(345, 100%, 60%, 0.87)',

  Red50: 'hsla(0, 86%, 97%, 1)',
  Red100: 'hsl(0, 93%, 94%)',
  Red200: 'hsl(0, 96%, 89%)',
  Red300: 'hsla(0, 94%, 82%, 1)',
  Red400: 'hsla(0, 91%, 71%, 1)',
  Red500: 'hsla(0, 84%, 60%, 1)',
  Red600: 'hsl(0, 72%, 51%)',

  // Might need to remove
  TorchRed: 'hsla(348, 100%, 54%, 1)',

  // Secondary white color, use for header text/icon
  FloralWhite: 'hsla(36, 63%, 97%, 1)',

  OrangePeel: 'hsla(36, 100%, 50%, 1)',
  OrangePeel200: 'hsla(36, 100%, 50%, 0.2)',
  OrangePeel500: 'hsla(36, 100%, 50%, 0.5)',
  OrangePeel700: 'hsla(36, 100%, 50%, 0.7)',
  OrangePeel900: 'hsla(36, 100%, 50%, 0.87)',

  // Might need to remove
  SweetCorn: 'hsla(48, 100%, 72%, 1)',
  SweetCorn700: 'hsla(48, 100%, 72%, 0.7)',
  SweetCorn900: 'hsla(48, 100%, 72%, 0.9)',

  Yellow500: 'hsl(45, 73%, 54%)',
  Yellow400: 'hsl(45, 93%, 58%)',
  Yellow100: 'hsl(46, 81%, 94%)',

  Orange50: 'hsl(33, 100%, 96%)',
  Orange500: 'hsl(25, 95%, 53%)',

  // Success Color
  LimeGreen: 'hsla(121, 63%, 53%, 1)',
  LimeGreen200: 'hsla(121, 63%, 53%, 0.2)',
  LimeGreen500: 'hsla(121, 63%, 53%, 0.5)',
  LimeGreen700: 'hsla(121, 63%, 53%, 0.7)',
  LimeGreen900: 'hsla(121, 63%, 53%, 0.87)',

  LimeGreenDarker: 'hsla(121, 63%, 28%, 0.87)',

  Green600: 'hsl(142, 76%, 36%)',
  Green500: 'hsl(172, 45%, 45%)',
  Green400: 'hsl(162, 42%, 55%)',
  Green300: 'hsl(142, 77%, 73%)',
  Green100: 'hsl(173, 60%, 94%)',
  Green50: 'hsl(138, 76%, 97%)',

  // Might need to remove
  CaribbeanGreen: 'hsla(160, 100%, 40%, 1)',
  CaribbeanGreen200: 'hsla(160, 100%, 40%, 0.2)',
  CaribbeanGreen900: 'hsla(160, 100%, 40%, 0.9)',

  // Used for QR Scaner Label... Might need to remove
  CeruleanCrayola: 'hsla(194, 100%, 43%, 1)',

  // Prefer Cultured
  TealBlue: 'hsla(194, 22%, 42%, 0.1)',
  TealBlue50: 'hsla(194, 22%, 42%, 0.05)',

  // For muted text... might be possible to use a shade of black instead.
  // Prefer ColumbiaBlue
  AirSuperiorityBlue: 'hsla(200, 38%, 60%, 1)',
  AirSuperiorityBlue200: 'hsla(200, 38%, 60%, 0.2)',
  AirSuperiorityBlue900: 'hsla(200, 38%, 60%, 0.87)',

  // Used in List filters. Might have to replace with something more noticeable.
  ColumbiaBlue: 'hsla(200, 39%, 75%, 1)',
  ColumbiaBlue100: 'hsla(200, 39%, 75%, 0.1)',
  ColumbiaBlue900: 'hsla(200, 39%, 75%, 0.87)',

  DodgerBlue: 'hsla(206, 99%,  50%, 1)',
  DodgerBlue100: 'hsla(206, 99%, 50%, 0.05)',
  DodgerBlue150: 'hsla(206, 99%, 50%, 0.1)',
  DodgerBlue200: 'hsla(206, 99%, 50%, 0.2)',
  DodgerBlue500: 'hsla(206, 99%,  50%, 0.50)',
  DodgerBlue700: 'hsla(206, 99%,  50%, 0.70)',
  DodgerBlue900: 'hsla(206, 99%,  50%, 0.87)',

  Blue900: 'hsl(218, 100%, 16%)',
  Blue500: 'hsla(217, 91%, 60%, 1)',
  Blue400: 'hsl(206, 83%, 60%)',
  Blue100: 'hsl(214, 95%, 93%)',
  Blue50: 'hsla(214, 100%, 97%, 1)',

  // Another color used for muted text.. The grey... possible to use a shade of black.
  // Prefer Black500
  CadetGray: 'hsla(207, 12%, 61%, 1)',
  CadetGray200: 'hsla(207, 12%, 61%, 0.2)',

  Cobalt: 'hsla(216, 85%, 37%, 1)',

  BlueCrayola: 'hsla(216, 100%, 52%, 1)',

  CornflowerBlue: 'hsla(216, 90%, 68%, 1)',
  CornflowerBlue800: 'hsla(216, 90%, 68%, 0.8)',

  // Allied Color
  EgyptianBlue: 'hsla(218, 100%, 28%, 1)',

  Transparent: 'hsla(1, 100%, 100%, 0)',

  // For teams
  ElectricIndigo: 'hsla(271, 97%, 53%, 1)',
  ElectricIndigo900: 'hsla(271, 97%, 53%, 0.9)',

  Purple400: 'hsl(272, 30%, 44%)',
  Purple100: 'hsl(274, 24%, 94%)',
};

const theme = createTheme({
  colors: {
    ...palette,
    mainBackground: palette.White,
    secondaryBackground: palette.BackgroundGray300,
    mainForeground: palette.Slate800,
    componentBackground: palette.White900,
    primaryCardBackground: palette.White,
    primaryCardText: palette.Blue900,
    dimText: palette.Slate500,
    dimBorder: palette.Slate200,
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
    xl3: 64,
    xl4: 92,
    z: 0,
    screenMargin: 30,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    heading: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '500',
    },
    subheading: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '500',
      color: 'dimText',
    },
    heading2: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '700',
    },
    heading3: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '500',
    },
    body: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '400',
    },
    label: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '500',
      color: 'dimText',
    },
    smallLabel: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '400',
      color: 'Black700',
    },
    largeLabel: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '500',
      color: 'Black700',
    },
    defaults: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '500',
      color: 'mainForeground',
    },
    question: {
      fontSize: 18,
      lineHeight: 18,
      fontWeight: '500',
      color: 'mainForeground',
    },
    answer: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '400',
      color: 'Gray800',
    },
  },
});

export type ColorProp = keyof Theme['colors'];
export type Theme = typeof theme;
export default theme;
