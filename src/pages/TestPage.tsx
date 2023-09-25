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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";

export default function TestPage() {
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    fetch("./nice.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);
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
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}>
          <SearchAppBar />
        </div>
        <Container maxWidth="md" sx={{ padding: "10px", marginTop: "66px" }}>
          <BlogInfoCard />
          <Box paddingTop={"20px"}>
            <ReactMarkdown
              children={markdownContent}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, "")}
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </Box>
        </Container>
        <BasicSpeedDial />
      </ThemeProvider>
    </>
  );
}
