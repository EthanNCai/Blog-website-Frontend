import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
import { Button, Paper, TextField } from "@mui/material";

import { BlogProps } from "../objs/blogProps";
import { Search } from "@mui/icons-material";
export default function IntroCard() {
  const sampleBlogTarget: BlogProps = {
    blogId: "123",
    avatarUrl:
      "https://www.backwoodshome.com/bhm/wp-content/uploads/2015/12/chicken-3727097_1920.jpg",
    title: "This is a test title! keep moving chicken! for polyU!",
    detail:
      "'This is a project that use a convLSTm to control a virtual car in horizon four to drive like a human, quite interesting'",
    date: "23.12.02",
    viewer: "213",
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
        <Button variant="contained" sx={{ maxWidth: "50px" }} color="secondary">
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
        <BlogCard
          blogId={sampleBlogTarget.blogId}
          avatarUrl={sampleBlogTarget.avatarUrl}
          title={sampleBlogTarget.title}
          detail={sampleBlogTarget.detail}
          date={sampleBlogTarget.date}
          viewer={sampleBlogTarget.viewer}
        />
        <BlogCard
          blogId={sampleBlogTarget.blogId}
          avatarUrl={sampleBlogTarget.avatarUrl}
          title={sampleBlogTarget.title}
          detail={sampleBlogTarget.detail}
          date={sampleBlogTarget.date}
          viewer={sampleBlogTarget.viewer}
        />
        <BlogCard
          blogId={sampleBlogTarget.blogId}
          avatarUrl={sampleBlogTarget.avatarUrl}
          title={sampleBlogTarget.title}
          detail={sampleBlogTarget.detail}
          date={sampleBlogTarget.date}
          viewer={sampleBlogTarget.viewer}
        />
      </Box>
    </>
  );
}
