// import { grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    // hena lazem ykon asmha mode 3shan ycreate al theme
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          // abdullah: {
          //   main: "#64748B",
          // },
          // favColor: {
          //   main: grey[300],
          // },
        }
      : {
          // palette values for dark mode
          // abdullah: {
          //   main: "teal",
          // },
          // favColor: {
          //   main: grey[800],
          // },
        }),
  },
});

export default getDesignTokens;
