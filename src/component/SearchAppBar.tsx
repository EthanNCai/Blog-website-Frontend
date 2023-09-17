import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, colors, ButtonGroup, Paper } from "@mui/material";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
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
            'chicken yard blog'
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ButtonGroup variant="outlined">
              <Button style={{ color: "black" }}>简</Button>
              <Button style={{ color: "black" }}>繁</Button>
              <Button style={{ color: "black" }}>EN</Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <ButtonGroup variant="outlined" size="small">
            <Button style={{ color: "black" }}>简</Button>
            <Button style={{ color: "black" }}>繁</Button>
            <Button style={{ color: "black" }}>EN</Button>
          </ButtonGroup>
        </Box>
      </AppBar>
    </Box>
  );
}
