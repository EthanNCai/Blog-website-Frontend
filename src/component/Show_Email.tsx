import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/Button";
import { Email } from "@mui/icons-material";
export default function Show_Email() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        size="small"
        sx={{
          padding: 0,
          margin: 0,
          width: "fit-content",
          height: "fit-content",
        }}>
        <Email style={{ color: "lightblue", padding: 0, margin: 0 }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Typography sx={{ p: 2 }}>chickenbilibili@outlook.com</Typography>
      </Popover>
    </div>
  );
}
