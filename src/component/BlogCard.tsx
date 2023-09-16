import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack, Toolbar, Typography, Chip, Avatar } from "@mui/material";
import { Padding, ThumbDown, ThumbUp, Visibility } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BlogCard() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
            label="programming"
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
            icon={<ThumbDown />}
            label="1"
            color="secondary"
            size="small"
            style={{ marginTop: "5px", marginInline: "5px" }}
          />
          <Chip
            icon={<ThumbUp />}
            label="4"
            color={"error"}
            size="small"
            style={{ marginTop: "5px", marginInline: "5px" }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
