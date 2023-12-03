import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Visibility, ThumbDown, ThumbUp, LockClock } from "@mui/icons-material";
import BlogProps from "../objs/blogProps";

interface InBlogTitleProps {
  blogProps: BlogProps;
  handle_like: () => Promise<void>;
  handle_hate: () => Promise<void>;
}

const icons = [<Visibility />, <ThumbDown />, <ThumbUp />, <LockClock />];

export default function InBlogTitle(props: InBlogTitleProps) {
  const { blogProps } = props;

  return (
    <Box paddingTop={"10px"}>
      <Chip
        label={blogProps.blog_category}
        sx={{ fontFamily: "JBFont" }}
        size="small"
        color="secondary"
        style={{ marginInline: "5px" }}
      />
      <Chip
        icon={<Visibility />}
        label={blogProps.blog_reads}
        sx={{ fontFamily: "JBFont" }}
        size="small"
        color="secondary"
        style={{ marginInline: "5px" }}
      />
      <Chip
        icon={<ThumbDown />}
        label={blogProps.blog_hates}
        sx={{ fontFamily: "JBFont" }}
        size="small"
        color="error"
        style={{ marginInline: "5px" }}
        onClick={() => {
          props.handle_hate();
        }}
      />
      <Chip
        icon={<ThumbUp />}
        label={blogProps.blog_likes}
        sx={{ fontFamily: "JBFont" }}
        size="small"
        color="success"
        style={{ marginInline: "5px" }}
        onClick={() => {
          props.handle_like();
        }}
      />
      <Chip
        icon={<LockClock />}
        label={blogProps.blog_date}
        sx={{ fontFamily: "JBFont" }}
        size="small"
        color="secondary"
        style={{ margin: "5px" }}
      />
    </Box>
  );
}
