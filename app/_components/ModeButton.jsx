import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { IconButton, Tooltip, useTheme } from '@mui/material';
// import React from 'react';

// eslint-disable-next-line react/prop-types
const ModeButton = ({setMode}) => {
  const theme = useTheme();
  return (
    <Tooltip title='mode'>
      <IconButton color='inherit'
        onClick={() => {
          if (theme.palette.mode == "dark") {
            setMode("light");
            window.localStorage.setItem('mode' , 'light');
          } else {
            setMode("dark");
            window.localStorage.setItem('mode' , 'dark');
          }
        }}
      >
        {theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
    </Tooltip>
  );
}

export default ModeButton;
