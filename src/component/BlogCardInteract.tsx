import React from "react";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import { CalendarMonth, Visibility } from "@mui/icons-material";

interface BlogCardInteractProps {
  isEX: boolean;
  setEX: React.Dispatch<React.SetStateAction<boolean>>;
  viewers: string;
  blogID: string;
  date: string;
}

export default function BlogCardInteract({
  isEX,
  setEX,
  viewers,
  blogID,
  date,
}: BlogCardInteractProps) {
  const chipStyle = {
    marginTop: "5px",
    marginInline: "5px",
    fontFamily: "JBFont",
  };

  return (
    <Box paddingLeft="10px" paddingBottom="10px">
      <Chip
        icon={<CalendarMonth />}
        label={date}
        color="secondary"
        size="small"
        style={chipStyle}
      />

      <Chip
        icon={<Visibility />}
        label={viewers}
        color="secondary"
        size="small"
        style={chipStyle}
      />

      <Chip
        onClick={() => {
          setEX((isEx) => !isEx);
        }}
        size="small"
        label="Expand"
        color="warning"
        style={chipStyle}
      />

      <a
        href={`/testPage?bid=${blogID}`}
        target="_blank"
        rel="noopener noreferrer">
        <Chip size="small" label="Read" color="success" style={chipStyle} />
      </a>
    </Box>
  );
}
