"use client";
import React, { useState } from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import getDesignTokens from "../_style/MyTheme";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "./TopBar";
import { useUser } from "@clerk/nextjs";
import SideBar from "./SideBar";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const modeLocal = localStorage.getItem("mode");

function AppRoot({ child }) {
  const [mode, setMode] = useState(modeLocal != null ? modeLocal : "light");
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  document.addEventListener("keyup", (e) => {
    e.key === "Escape" && setOpen(false);
  });

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // useMemo lt7seen ada2 al web
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {user && <TopBar {...{ open, handleDrawerOpen, setMode }} />}

        {user && <SideBar {...{ open, handleDrawerClose }} />}

        <Box component="main" sx={{ flexGrow: 1, p: user && 3 }}>
          {user && <DrawerHeader />}
          {child}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AppRoot;
