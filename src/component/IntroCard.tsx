import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
import { Pagination, Stack } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { BlogProps } from "../objs/blogProps";
export default function IntroCard() {
  const sampleBlogTarget: BlogProps = {
    blogId: "123",
    avatarUrl: "123",
    title: "title",
    detail: "detail",
    date: "date",
    viewer: "viewers",
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
        },
      }}>
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
