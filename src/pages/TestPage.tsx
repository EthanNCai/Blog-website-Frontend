import { useState, useEffect } from "react";
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
import SearchAppBar from "../component/Banner";
import InBlogTitle from "../component/InBlogTitle";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { InlineMath, BlockMath } from "react-katex";
import RemarkMathPlugin from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
const config = {
  loader: { load: ["input/asciimath"] },
};
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid black;
    padding: 6px;
  }

  th {
    background-color: #eeeeee;
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
  const mathJaxConfig = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
  };

  useEffect(() => {
    fetch("./nice.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);
  const renderers = {
    inlineMath: ({ value }: { value: string }) => <InlineMath math={value} />,
    math: ({ value }: { value: string }) => <BlockMath math={value} />,
  };
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
          <InBlogTitle />
          <Box paddingTop={"20px"}>
            <MathJaxContext config={mathJaxConfig}>
              <MathJax>
                <ReactMarkdown
                  children={markdownContent}
                  remarkPlugins={[gfm]}
                  components={{
                    table({ node, ...props }) {
                      return <StyledTable {...props} />;
                    },
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      if (inline) {
                        return (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        );
                      } else if (match) {
                        return (
                          <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, "")}
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                          />
                        );
                      } else {
                        return (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        );
                      }
                    },
                    blockquote({ node, ...props }) {
                      return <StyledBlockquote {...props} />;
                    },
                    img({ node, src, alt, ...props }) {
                      return <StyledImage src={src} alt={alt} {...props} />;
                    },
                  }}
                />
              </MathJax>
            </MathJaxContext>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
