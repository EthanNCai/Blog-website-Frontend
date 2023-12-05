import Box from "@mui/material/Box";

import { Paper, Stack, Typography } from "@mui/material";
import PersonalInfoBar from "./PersonalInfoBar";
import { Email, GitHub, Reddit } from "@mui/icons-material";
import Show_Email from "./Show_Email";
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
              {"你好 Hello"}
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
          <a href="https://www.reddit.com/user/ChickenBili" target="_blank">
            <Reddit style={{ color: "red" }} />
          </a>
          <a href="https://github.com/EthanNCai" target="_blank">
            <GitHub style={{ color: "black" }} />
          </a>
          <Show_Email />
        </Stack>
      </Box>
    </Stack>
  );
}
export {};
