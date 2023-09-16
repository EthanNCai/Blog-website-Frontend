import React from 'react';

import SearchAppBar from './component/SearchAppBar';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { purple,green,blue} from '@mui/material/colors';
import { createGlobalStyle } from 'styled-components';

//Theme control
const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
    },
    secondary: {
      main: blue[400],
    },
  },
});



function App() {
  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <SearchAppBar/>
      </ThemeProvider>
      
    </>
  );
}

export default App;
