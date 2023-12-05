import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, CircularProgress } from "@mui/material";
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
import BlogProps from "../objs/blogProps";
import "katex/dist/katex.min.css";

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

export default function ArticlePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const [markdownContent, setMarkdownContent] = useState("");
  const [blogData, setBlogData] = useState<BlogProps>({} as BlogProps);
  const [isLoading, setIsLoading] = useState(true);
  const [is_liked, set_is_liked] = useState<boolean>(false);
  const [is_hated, set_is_hated] = useState<boolean>(false);
  const mathJaxConfig = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
  };

  /*
    django url:
    path('blog_likes_increase/<int:id>/', views.blog_likes_increase, name='blog_likes_increase'),
    path('blog_likes_decrease/<int:id>/', views.blog_likes_decrease, name='blog_likes_decrease'),
    path('blog_hates_increase/<int:id>/', views.blog_hates_increase, name='blog_hates_increase'),
    path('blog_hates_decrease/<int:id>/', views.blog_hates_decrease, name='blog_hates_decrease'),

  */
  const handle_like = async () => {
    if (is_liked) {
      fetch(`http://chickenyards.com/api/blog/blog_likes_decrease/${id}/`);
      set_is_liked(false);
      setBlogData((prevData) => ({
        ...prevData,
        blog_likes: prevData.blog_likes - 1,
      }));
    } else {
      fetch(`http://chickenyards.com/api/blog/blog_likes_increase/${id}/`);
      set_is_liked(true);
      setBlogData((prevData) => ({
        ...prevData,
        blog_likes: prevData.blog_likes + 1,
      }));
    }
  };
  const handle_hate = async () => {
    if (is_hated) {
      fetch(`http://chickenyards.com/api/blog/blog_hates_decrease/${id}/`);
      set_is_hated(false);
      setBlogData((prevData) => ({
        ...prevData,
        blog_hates: prevData.blog_hates - 1,
      }));
    } else {
      fetch(`http://chickenyards.com/api/blog/blog_hates_increase/${id}/`);
      set_is_hated(true);
      setBlogData((prevData) => ({
        ...prevData,
        blog_hates: prevData.blog_hates + 1,
      }));
    }
  };
  const acquire_article = async () => {
    fetch(`http://chickenyards.com/api/blog/blog-article/${id}/`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };
  const acquire_article_info = async () => {
    fetch(`http://chickenyards.com/api/blog/blog_find_id/${id}/`)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    acquire_article();
    acquire_article_info();
  }, []);

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
        <title>{`Blog - ${blogData.blog_name}`}</title>
      </Helmet>
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
        <Container maxWidth="md" sx={{ padding: "20px", marginTop: "66px" }}>
          <InBlogTitle
            blogProps={blogData}
            handle_hate={handle_hate}
            handle_like={handle_like}
            is_liked={is_liked}
            is_hated={is_hated}
          />
          <Box paddingTop={"20px"}>
            {isLoading ? (
              <CircularProgress color="success" />
            ) : (
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
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
