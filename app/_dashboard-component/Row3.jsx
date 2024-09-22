import {  Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Bar from "../(pages)/barChart/Bar";
import Geo from "../(pages)/geography/Geo";
import Pie from "../(pages)/pieChart/Pie";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{flexGrow: 1,minWidth: "300px",maxWidth: '300px', width: "28%", position: 'relative' }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

        <Pie isDashbord={true} />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Typography variant="h6" align="center" sx={{ mt: "15px" , fontSize: '14px'}}>
            Total
          </Typography>
          <Typography variant="body2" px={0.7} pb={3} align="center" sx={{fontSize: '18px', fontWeight: 'bold' ,color : '#306bde'}}>
            45251 
          </Typography>
        </div>
      </Paper>

      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
      <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>

      <Bar isDashbord={true} />

      </Paper>

      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
        
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
