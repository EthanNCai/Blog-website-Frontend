import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CSSTransition } from "react-transition-group";
import { Stack, Toolbar, Typography, Chip, Avatar } from "@mui/material";
import { Padding, ThumbDown, ThumbUp, Visibility } from "@mui/icons-material";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import { Link } from "react-router-dom";

export default function BlogCardInteract() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [isEx, setEX] = React.useState(false);

  return (
    <Box paddingLeft={"10px"} paddingBottom={"15px"}>
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
        style={{
          marginTop: "5px",
          marginInline: "5px",
          fontFamily: "JBFont",
        }}
      />
      <a href="/testPage?bid=ajwidwad" target="_blank">
        <Chip
          onClick={() => {
            setEX((isEx) => !isEx);
          }}
          label="Read"
          color={"success"}
          style={{
            marginTop: "5px",
            marginInline: "5px",
            fontFamily: "JBFont",
          }}
        />
      </a>
    </Box>
  );
}
