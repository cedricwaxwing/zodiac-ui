import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { ThemeProvider } from "styled-components"
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@material-ui/core"
import { theme as gnosisTheme } from "@gnosis.pm/safe-react-components"
import App from "./components/App"
import { ZodiacStyle } from "./theme/ZodiacStyle"
import { ZODIAC_THEME } from "./theme/ZodiacTheme"
import reportWebVitals from './reportWebVitals';

const Main = () => {
  return (
    <MUIThemeProvider theme={ZODIAC_THEME}>
      <ThemeProvider theme={gnosisTheme}>
        <CssBaseline />
        <ZodiacStyle />
        <App />
      </ThemeProvider>
    </MUIThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root"),
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();