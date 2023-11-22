import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Chip
            label="back to"
            onClick={() => {
              window.location.href = "/";
            }}
            sx={{ fontFamily: "JBFont" }}
          />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
              color: "black",
              fontFamily: "JBFont",
              whiteSpace: "normal",
              wordBreak: "break-all",
              padding: "15px",
            }}>
            Chicken yd.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
