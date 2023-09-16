import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
export default function IntroCard() {
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
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Box>
  );
}
