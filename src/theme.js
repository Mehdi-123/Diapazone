import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontSize: "3em",
    },
    h2: {
      fontSize: "1.7em",
    },
    h3: {
      fontSize: "0.9em",
    },
    h4: {
      fontSize: ".75em",
    },
    h5: {
      fontSize: ".5em",
    },
  },
  breakpoints: {
    values: {
      phone: 0,
      xxxs: 720,
      xxs: 1050,
      xs: 1300,
      sm: 1400,
      md: 1550,
      lg: 1740,
      xl: 1885,
    },
  },
});

export default theme;
