import SearchAppBar from "./component/SearchAppBar";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
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
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 99,
          }}>
          <SearchAppBar />
        </div>
        <Container maxWidth="lg" sx={{ padding: "0px", marginTop: "66px" }}>
          <IntroBar />
          <IntroCard />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
