import { createGlobalTheme } from '@vanilla-extract/css';
import { palette } from './palette.css';

const withAlpha = (hex: string, alpha: number) => {
  return `color-mix(in srgb, ${hex} ${alpha}%, transparent)`;
};

export const semantic = createGlobalTheme(':root', {
  primary: {
    normal: palette.blue[50],
    strong: palette.blue[45],
    heavy: palette.blue[40],
  },
  label: {
    normal: palette.coolNeutral[10],
    strong: palette.coolNeutral[0],
    neutral: withAlpha(palette.coolNeutral[22], 88),
    alternative: withAlpha(palette.coolNeutral[25], 61),
    assistive: withAlpha(palette.coolNeutral[25], 28),
    disable: withAlpha(palette.coolNeutral[25], 16),
  },
  background: {
    normal: {
      normal: palette.coolNeutral[100],
      alternative: palette.coolNeutral[99],
    },
    elevated: {
      normal: palette.coolNeutral[100],
      alternative: palette.coolNeutral[99],
    },
  },
  interaction: {
    inactive: palette.coolNeutral[70],
    disable: palette.coolNeutral[98],
  },
  line: {
    normal: {
      normal: withAlpha(palette.coolNeutral[50], 22),
      neutral: withAlpha(palette.coolNeutral[50], 16),
      alternative: withAlpha(palette.coolNeutral[50], 8),
      strong: withAlpha(palette.coolNeutral[50], 52),
    },
    solid: {
      normal: palette.coolNeutral[96],
      neutral: palette.coolNeutral[97],
      alternative: palette.coolNeutral[98],
      strong: palette.coolNeutral[80],
    },
  },
  fill: {
    normal: withAlpha(palette.coolNeutral[50], 8),
    strong: withAlpha(palette.coolNeutral[50], 16),
    alternative: withAlpha(palette.coolNeutral[50], 5),
  },
  static: {
    white: palette.common[100],
    black: palette.common[0],
  },
  accent: {
    background: {
      redOrange: palette.redOrange[50],
      lime: palette.lime[50],
      cyan: palette.cyan[50],
      lightBlue: palette.lightBlue[50],
      violet: palette.violet[50],
      purple: palette.purple[50],
      pink: palette.pink[50],
    },
    foreground: {
      red: palette.red[40],
      redOrange: palette.redOrange[48],
      orange: palette.orange[39],
      lime: palette.lime[37],
      green: palette.green[40],
      cyan: palette.cyan[40],
      lightBlue: palette.lightBlue[40],
      blue: palette.blue[45],
      violet: palette.violet[45],
      purple: palette.purple[40],
      pink: palette.pink[46],
    },
  },
  material: {
    dimmer: withAlpha(palette.coolNeutral[10], 52),
  },
  inverse: {
    primary: palette.blue[60],
    background: palette.coolNeutral[15],
    label: palette.coolNeutral[99],
  },
});

export type Semantic = typeof semantic;
