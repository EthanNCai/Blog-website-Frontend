import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CSSTransition } from "react-transition-group";
import { Stack, Toolbar, Typography, Chip, Avatar } from "@mui/material";
import { Padding, ThumbDown, ThumbUp, Visibility } from "@mui/icons-material";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
export default function BlogCard() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [isEx, setEX] = React.useState(false);

  return (
    <Paper elevation={4} sx={{ maxWidth: "95%", overflow: "auto" }}>
      <Stack direction={"column"} sx={{ justifyContent: "in-between" }}>
        <Stack
          sx={{ padding: "10px", justifyContent: "in-between" }}
          direction={"row"}>
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
                src={"https://www.w3schools.com/css/img_5terre.jpg"}
                alt="Sample"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </div>
          <Stack>
            <Typography
              sx={{
                flexGrow: 1,
                paddingInline: "15px",
                color: "black",
                fontFamily: "JBFont",
                whiteSpace: "normal",
                wordBreak: "break-all",
              }}>
              'convLSTM Horizon self driving v1.0'
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Grow
                in={isEx}
                style={{ transformOrigin: "0 0 0" }}
                {...(isEx ? { timeout: 1000 } : {})}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    padding: "15px",
                    color: "gray",
                    fontFamily: "JBFont",
                    whiteSpace: "normal",
                    wordBreak: "break-all",
                  }}
                  variant="body2">
                  {isEx
                    ? "'This is a project that use a convLSTm to control a virtual car in horizon four to drive like a human, quite interesting'"
                    : null}
                </Typography>
              </Grow>
            </Box>
            <Box
              paddingLeft={"15px"}
              display={{ sm: "block", xs: "none" }}
              flexWrap="wrap">
              <Chip
                label="20.7.4"
                color="secondary"
                size="small"
                style={{ marginInline: "5px" }}
              />
              <Chip
                label="programming"
                color="secondary"
                size="small"
                style={{ marginInline: "5px" }}
              />
              <Chip
                icon={<Visibility />}
                label="43"
                color="secondary"
                size="small"
                style={{ marginInline: "5px" }}
              />
              <Chip
                icon={<ThumbDown />}
                label="1"
                color="secondary"
                size="small"
                style={{ marginInline: "5px" }}
              />
              <Chip
                onClick={() => {
                  setEX((isEx) => !isEx);
                }}
                icon={<ThumbUp />}
                label="4"
                color={"error"}
                size="small"
                style={{ marginInline: "5px" }}
              />
            </Box>
          </Stack>
        </Stack>
        <Box
          paddingLeft={"10px"}
          paddingBottom={"15px"}
          display={{ sm: "none", xs: "block" }}>
          <Chip
            label="20.7.4"
            color="secondary"
            size="small"
            style={{ marginTop: "5px", marginInline: "5px" }}
          />

          <Chip
            icon={<Visibility />}
            label="43"
            color="secondary"
            size="small"
            style={{ marginTop: "5px", marginInline: "5px" }}
          />
          <Chip
            onClick={() => {
              setEX((isEx) => !isEx);
            }}
            label="Expand"
            color={"warning"}
            style={{ marginTop: "5px", marginInline: "5px" }}
          />
          <Chip
            onClick={() => {
              setEX((isEx) => !isEx);
            }}
            label="Read"
            color={"success"}
            style={{ marginTop: "5px", marginInline: "5px" }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
