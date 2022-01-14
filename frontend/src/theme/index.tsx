import { useMemo, ReactNode } from 'react';
// material
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: ThemeOptions = {
    palette: { ...palette.light, mode: 'light' },
    shape,
    typography,
    breakpoints,
    direction: 'rtl',
    shadows: shadows.light,
    customShadows: customShadows.light
  };

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
