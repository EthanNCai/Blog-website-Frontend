import Box from "@mui/material/Box";

import { Paper, Stack, Typography } from "@mui/material";
import PersonalInfoBar from "./PersonalInfoBar";
import { Email, GitHub, Reddit } from "@mui/icons-material";
export default function Link() {
  return (
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
  );
}
export {};
