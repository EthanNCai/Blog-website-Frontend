import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
import { Pagination, Stack } from "@mui/material";

import { BlogProps } from "../objs/blogProps";
export default function IntroCard() {
  const sampleBlogTarget: BlogProps = {
    blogId: "123",
    avatarUrl:
      "https://www.backwoodshome.com/bhm/wp-content/uploads/2015/12/chicken-3727097_1920.jpg",
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
  );
}
