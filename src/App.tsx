import React from "react";

import SearchAppBar from "./component/SearchAppBar";
import {
  AppBar,
  Container,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { purple, green, blue, grey } from "@mui/material/colors";
import { createGlobalStyle } from "styled-components";
import IntroCard from "./component/IntroCard";

import IntroBar from "./component/IntroBar";
//Theme control
const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[300],
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Container sx={{ padding: "10px" }}>
          <IntroBar />
          <IntroCard />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
