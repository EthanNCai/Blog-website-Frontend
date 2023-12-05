import Banner from "./component/Banner";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import BlogFlow from "./component/BlogFlow";

import IntroBar from "./component/IntroBar";

//Theme control
const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: grey[200],
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
          <Banner />
        </div>
        <Container maxWidth="lg" sx={{ padding: "0px", marginTop: "66px" }}>
          <IntroBar />

          <BlogFlow />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
