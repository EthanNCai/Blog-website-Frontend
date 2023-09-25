import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";
import {
  Paper,
  Stack,
  Chip,
  Avatar,
  Container,
  Typography,
} from "@mui/material";
import BasicAccordion from "./BasicAccordion";
import { Email, GitHub, Reddit } from "@mui/icons-material";
export default function IntroBar() {
  return (
    <div style={{ paddingBottom: "10px" }}>
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
        <Paper elevation={5} sx={{ maxWidth: "95%", overflow: "auto" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignContent={"center"}>
            <Box padding={"15px"}>
              <Stack direction={"row"}>
                <Stack direction={"column"} paddingLeft={"30px"}>
                  <Typography
                    sx={{
                      fontFamily: "JBFont",
                    }}>
                    {"Hello"}
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box padding={"15px"}>
              <Stack direction={"row"} alignContent={"center"} spacing={"5px"}>
                <Typography
                  variant={"body2"}
                  sx={{
                    fontFamily: "JBFont",
                    whiteSpace: "nowrap",
                  }}>
                  Find me:
                </Typography>
                <Reddit style={{ color: "red" }} />
                <GitHub style={{ color: "black" }} />
                <Email style={{ color: "lightblue" }} />
              </Stack>
            </Box>
          </Stack>
          <BasicAccordion />
        </Paper>
      </Box>
    </div>
  );
}
