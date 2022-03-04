import React from 'react';

import { ThemeProvider } from "styled-components"
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@material-ui/core"
import { theme as gnosisTheme } from "@gnosis.pm/safe-react-components"
import { ZodiacStyle } from "../src/theme/ZodiacStyle"
import { ZODIAC_THEME } from "../src/theme/ZodiacTheme"

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={ZODIAC_THEME}>
      <ThemeProvider theme={gnosisTheme}>
        <CssBaseline />
        <ZodiacStyle />
        <Story />
      </ThemeProvider>
    </MUIThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}