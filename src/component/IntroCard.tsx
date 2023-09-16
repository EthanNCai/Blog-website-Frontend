import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack, Toolbar, Typography, Chip, Avatar } from "@mui/material";
import { Padding } from "@mui/icons-material";

export default function IntroCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          flex: "1 0 auto",
          minWidth: 0,
          minHeight: 128,
        },
      }}>
      <Paper elevation={12} sx={{ maxWidth: "95%", overflow: "auto" }}>
        <Typography
          sx={{
            flexGrow: 1,
            padding: "10px",
            color: "black",
            fontFamily: "JBFont",
            whiteSpace: "normal",
            wordBreak: "break-all",
          }}>
          'self-Intro'
        </Typography>
      </Paper>
      <Paper elevation={12} sx={{ maxWidth: "95%", overflow: "auto" }}>
        <Typography
          sx={{
            flexGrow: 1,
            padding: "10px",
            color: "black",
            fontFamily: "JBFont",
            whiteSpace: "normal",
            wordBreak: "break-all",
          }}>
          'convLSTM Horizon selfdriving v1.0'
        </Typography>
      </Paper>
      <Paper
        elevation={12}
        sx={{ maxWidth: { sm: "450px", xs: "95%" }, overflow: "auto" }}>
        <Stack
          sx={{ padding: "20px" }}
          direction={"row"}
          alignItems={"leading"}
          spacing={"20px"}>
          <Typography
            sx={{
              color: "black",
              fontFamily: "JBFont",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}>
            '卷积LSTM地平线自动驾驶 p1'
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
