import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import PersonalInfoBar from "./PersonalInfoBar";
import Link from "./Link";
import Headpicture from "./HeadPicture";
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
          <Headpicture />
          <Link />
          <PersonalInfoBar />
        </Paper>
      </Box>
    </div>
  );
}
