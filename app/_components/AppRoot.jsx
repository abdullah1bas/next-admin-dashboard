"use client";
import React, { useEffect, useState } from "react";
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

// const modeLocal = localStorage.getItem("mode");

function AppRoot({ child }) {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    // جلب الوضع المخزن في localStorage بعد تحميل الصفحة
    const storedMode = localStorage.getItem("mode");
    if (storedMode) setMode(storedMode);

    // تسجيل المستمع لمفتاح الهروب مرة واحدة عند تحميل المكون
    const handleKeyUp = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keyup", handleKeyUp);

    // تنظيف المستمع عند تدمير المكون
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // تشغيل هذا الـ useEffect مرة واحدة فقط عند تحميل المكون

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
