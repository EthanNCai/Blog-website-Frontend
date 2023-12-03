import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
import { Button, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { BlogProps } from "../objs/blogProps";
import { Search } from "@mui/icons-material";
export default function IntroCard() {
  const [blogData, setBlogData] = useState<BlogProps[]>([]);
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextFieldValue(event.target.value);
  };

  useEffect(() => {
    initial_blogflow_fetching();
  }, []);

  const initial_blogflow_fetching = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/blog/blog_flow");
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const fetching_blogflow_by_key = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/blog/blog_flow_by_keyword/${textFieldValue}/`
      );
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            flex: "1 0 ",
            marginInline: "5px",
          },
        }}
        paddingX={"5px"}
        noValidate
        autoComplete="off">
        <Paper elevation={4}>
          <TextField
            id="filled-basic"
            label="search for blogs"
            variant="outlined"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-root": {
                "&:before, &:after": {
                  display: "none",
                },
              },
            }}
          />
        </Paper>
        <Button
          variant="contained"
          sx={{ maxWidth: "50px" }}
          color="secondary"
          onClick={fetching_blogflow_by_key}>
          <Search />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            flex: "1 0 auto",
            minWidth: 0,
            minHeight: 80,
            maxWidth: "100%",
            marginBottom: "8px",
            padding: "6px",
          },
          padding: "8px",
        }}>
        {blogData.map((blog) => (
          <BlogCard
            key={blog.blog_id}
            blog_id={blog.blog_id}
            blog_name={blog.blog_name}
            blog_likes={blog.blog_likes}
            blog_hates={blog.blog_hates}
            blog_date={blog.blog_date}
            blog_category={blog.blog_category}
            blog_description={blog.blog_description}
            blog_reads={blog.blog_reads}
          />
        ))}
      </Box>
    </>
  );
}
