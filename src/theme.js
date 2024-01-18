import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    h1: {
      fontSize: "3em",
    },
    h2: {
      fontSize: "2em",
    },
    h3: {
      fontSize: "1em",
    },
    h4: {
      fontSize: ".67em",
    },
    h5: {
      fontSize: ".5em",
    },
  },
});

export default theme;
