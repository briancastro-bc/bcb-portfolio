const THEME_TYPE = {
  dark: 'DARK',
  light: 'LIGHT',
} as const;

export type ThemeType = (typeof THEME_TYPE)[keyof typeof THEME_TYPE];
