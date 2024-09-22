'use client'
import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, useTheme } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center" >
      <Typography align="center" mb={2} color={theme.palette.error.main} variant="h5">
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
      <Link href='/' className="p-3 bg-sky-500 hover:bg-sky-900 transition duration-150 rounded-md ">Home</Link>
    </div>
  );
};

export default NotFound;