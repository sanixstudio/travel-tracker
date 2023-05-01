const { createTheme } = require("@mui/material");
const { dark } = require("@mui/material/styles/createPalette");

const theme = createTheme({
  palette: {
    mode: dark,
    primary: {
      main: "#ff4400",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
  },
});

export default theme;
