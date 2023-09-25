import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CSSTransition } from "react-transition-group";
import { Stack, Toolbar, Typography, Chip, Avatar } from "@mui/material";
import { Padding, ThumbDown, ThumbUp, Visibility } from "@mui/icons-material";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import { Link } from "react-router-dom";
import { BlogProps } from "../objs/blogProps";
import BlogCardInteract from "./BlogCardInteract";

export default function BlogCard(blogProps: BlogProps) {
  const [isEx, setEX] = React.useState(false);

  return (
    <Paper elevation={4} sx={{ overflow: "auto" }}>
      <Stack direction={"column"} sx={{ justifyContent: "in-between" }}>
        <Stack
          sx={{ padding: "10px", justifyContent: "in-between" }}
          direction={"row"}
          alignContent={"center"}>
          <div style={{ maxWidth: "70%" }}>
            <Box
              sx={{
                width: "64px",
                height: "64px",
                aspectRatio: "1/1",
                overflow: "hidden",
                borderRadius: "15%",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              }}>
              <img
                src={blogProps.avatarUrl}
                alt="Loading"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </div>
          <Stack alignContent={"center"}>
            <Typography
              sx={{
                flexGrow: 1,
                paddingInline: "15px",
                color: "black",
                fontFamily: "JBFont",
                whiteSpace: "normal",
                wordBreak: "break-all",
              }}>
              {blogProps.title}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Grow
                in={isEx}
                style={{ transformOrigin: "0 0 0" }}
                {...(isEx ? { timeout: 1000 } : {})}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    paddingInline: "15px",
                    paddingY: "5px",
                    color: "gray",
                    fontFamily: "JBFont",
                    whiteSpace: "normal",
                    wordBreak: "break-all",
                  }}
                  variant="body2">
                  {isEx ? blogProps.detail : null}
                </Typography>
              </Grow>
            </Box>
            <Box display={{ sm: "block", xs: "none" }}>
              <BlogCardInteract
                isEX={isEx}
                setEX={setEX}
                viewers={blogProps.viewer}
                date={blogProps.date}
                blogID={blogProps.blogId}
              />
            </Box>
          </Stack>
        </Stack>
        <Box display={{ sm: "none", xs: "block" }}>
          <BlogCardInteract
            isEX={isEx}
            setEX={setEX}
            viewers={blogProps.viewer}
            date={blogProps.date}
            blogID={blogProps.blogId}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
