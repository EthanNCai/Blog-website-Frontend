import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CSSTransition } from "react-transition-group";
import { Chip } from "@mui/material";
import { CalendarMonth, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface BlogCardInteractProps {
  isEX: boolean;
  setEX: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BlogCardInteract({
  isEX,
  setEX,
}: BlogCardInteractProps) {
  const chipStyle = {
    marginTop: "5px",
    marginInline: "5px",
    fontFamily: "JBFont",
  };

  return (
    <Box paddingLeft="10px" paddingBottom="15px">
      <Chip
        icon={<CalendarMonth />}
        label="20.7.4"
        color="secondary"
        size="small"
        style={chipStyle}
      />

      <Chip
        icon={<Visibility />}
        label="43"
        color="secondary"
        size="small"
        style={chipStyle}
      />

      <Chip
        onClick={() => {
          setEX((isEx) => !isEx);
        }}
        label="Expand"
        color="warning"
        style={chipStyle}
      />

      <a href="/testPage?bid=ajwidwad" target="_blank">
        <Chip
          onClick={() => {
            setEX((isEx) => !isEx);
          }}
          label="Read"
          color="success"
          style={chipStyle}
        />
      </a>
    </Box>
  );
}
