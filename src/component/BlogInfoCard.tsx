import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import { Toolbar, Chip, Avatar } from "@mui/material";
import {
  LockClock,
  Padding,
  PunchClock,
  ThumbDown,
  ThumbUp,
  Visibility,
} from "@mui/icons-material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function BlogInfoCard() {
  return (
    <Paper elevation={12}>
      <Box padding={"20px"}>
        <Typography variant="h5" component="div" sx={{ fontFamily: "JBFont" }}>
          convLSTM Horizon self driving v1.0'
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          programming
        </Typography>
        <Stack direction={"row"}>
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
            icon={<ThumbUp />}
            label="4"
            size="small"
            color="secondary"
            style={{ marginInline: "5px" }}
          />

          <Chip
            icon={<LockClock />}
            label="2021.2.12"
            size="small"
            color="secondary"
            style={{ marginInline: "5px" }}
          />
        </Stack>
      </Box>
    </Paper>
  );
}
