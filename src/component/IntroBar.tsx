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
        <Paper elevation={12} sx={{ maxWidth: "95%", overflow: "auto" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignContent={"center"}>
            <Box padding={"23px"}>
              <Stack direction={"row"}>
                <Stack direction={"column"} paddingLeft={"30px"}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "JBFont",
                    }}>
                    Blog browsed: 432
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "JBFont",
                    }}>
                    Site visited: 4201
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box
              maxWidth={"32%"}
              padding={"10px"}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 0.1,
                  flex: "1 0 auto",
                  minWidth: 0,
                },
              }}>
              <Chip label="GitHub" variant="outlined" size="small" />
              <Chip
                label="Reddit"
                variant="outlined"
                size="small"
                color="warning"
              />
              <Chip
                label="Steam"
                variant="outlined"
                size="small"
                color="warning"
              />
              <Chip label="WeChat Pay" variant="outlined" size="small" />
            </Box>
          </Stack>
          <BasicAccordion />
        </Paper>
      </Box>
    </div>
  );
}
