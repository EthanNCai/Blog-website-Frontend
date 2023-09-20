import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";
import gfm from "remark-gfm";
import { createTheme } from "@mui/material/styles";
import { purple, green, blue, grey } from "@mui/material/colors";
import SearchAppBar from "../component/SearchAppBar";
import { ThemeProvider } from "@mui/material";
import { BlurOffOutlined, Padding } from "@mui/icons-material";
import BlogInfoCard from "../component/BlogInfoCard";
import BasicSpeedDial from "../component/BasicSpeedDail";
export default function TestPage() {
  // 使用 params 对象来访问 URL 中的参数
  const queryParameters = new URLSearchParams(window.location.search);
  const bid = queryParameters.get("bid");
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lambo</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Container maxWidth="md" sx={{ marginTop: "30px" }}>
          <BlogInfoCard />
          <Box paddingTop={"20px"}>
            <ReactMarkdown remarkPlugins={[gfm]}>
              *React-Markdown* now supports ~strikethrough~. Thanks to gfm
              plugin.
            </ReactMarkdown>
          </Box>
        </Container>
        <BasicSpeedDial />
      </ThemeProvider>
    </>
  );
}
