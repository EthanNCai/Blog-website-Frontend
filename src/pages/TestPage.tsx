import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Box from "@mui/material/Box";
import SearchAppBar from "../component/SearchAppBar";
import BlogInfoCard from "../component/BlogInfoCard";
import BasicSpeedDial from "../component/BasicSpeedDail";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  font-size: 14px; /* 默认字体大小 */

  td,
  th {
    border: 2px solid black;
    padding: 8px;
  }

  th {
    background-color: #eeeeee;
  }

  @media (max-width: 600px) {
    font-size: 12px; /* 在较小宽度下缩小字体大小 */
  }
`;
const StyledBlockquote = styled.blockquote`
  border-left: 2px solid #ccc;
  padding-left: 16px;
  margin: 0;
  color: #555;
  font-style: italic;
`;

const StyledImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;

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
        <Container maxWidth="md" sx={{ padding: "20px", marginTop: "66px" }}>
          <BlogInfoCard />
          <Box paddingTop={"20px"}>
            <ReactMarkdown
              children={markdownContent}
              remarkPlugins={[gfm]}
              components={{
                table({ node, ...props }) {
                  return <StyledTable {...props} />;
                },
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
                blockquote({ node, ...props }) {
                  return <StyledBlockquote {...props} />;
                },
                img({ node, src, alt, ...props }) {
                  return <StyledImage src={src} alt={alt} {...props} />;
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
