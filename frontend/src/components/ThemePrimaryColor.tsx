import { ReactNode, useMemo } from 'react';
// material
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import componentsOverride from '../theme/overrides';

type ThemePrimaryColorProps = {
  children: ReactNode;
};

export default function ThemePrimaryColor({ children }: ThemePrimaryColorProps) {
  const defaultTheme = useTheme();

  const themeOptions = defaultTheme;

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
