import React from 'react';

import SearchAppBar from './component/SearchAppBar';
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { purple,green,blue, grey} from '@mui/material/colors';
import { createGlobalStyle } from 'styled-components';
import IntroCard from './component/IntroCard';

//Theme control
const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: green[200],
    },
  },
});



function App() {
  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <SearchAppBar/>

        <IntroCard />

      </ThemeProvider>
      
    </>
  );
}

export default App;
