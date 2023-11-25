import Box from "@mui/material/Box";

import { Paper, Stack, Typography } from "@mui/material";
import PersonalInfoBar from "./PersonalInfoBar";
import { Email, GitHub, Reddit } from "@mui/icons-material";
export default function IntroBar() {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            flex: "1 0 auto",
            minWidth: 0,
            minHeight: 80,
            maxWidth: "100%",
          },
          padding: "10px",
        }}>
        <Paper elevation={5} sx={{ maxWidth: "95%", overflow: "auto" }}>
          <Box
            sx={{
              overflow: "hidden",
              maxHeight: "30vh",
            }}>
            <img
              src="rt.webp"
              alt="Loading"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
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
          <PersonalInfoBar />
        </Paper>
      </Box>
    </div>
  );
}
