import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
import { Pagination, Stack } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { BlogProps } from "../objs/blogProps";
export default function IntroCard() {
  const sampleBlogTarget: BlogProps = {
    blogId: "123",
    avatarUrl: "https://www.w3schools.com/css/img_5terre.jpg",
    title: "'convLSTM Horizon self driving v1.0'",
    detail:
      "'This is a project that use a convLSTm to control a virtual car in horizon four to drive like a human, quite interesting'",
    date: "23.12.02",
    viewer: "213",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",

        "& > :not(style)": {
          m: 0.5,
          flex: "1 0 auto",
          minWidth: 0,
          minHeight: 80,
          maxWidth: "100%",
        },
        maxWidth: "95%",
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
      <Stack
        direction={"row"}
        justifyContent={"center"}
        padding={"30px"}
        width={"100%"}>
        <Pagination count={10} />
      </Stack>
    </Box>
  );
}
