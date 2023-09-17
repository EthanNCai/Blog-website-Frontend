import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
import { Pagination, Stack } from "@mui/material";
import { CSSTransition } from "react-transition-group";
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
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
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
