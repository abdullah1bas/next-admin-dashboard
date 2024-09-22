'use client'
import { Container, useTheme } from "@mui/material";
import Geo from "./Geo";
import Header from "@/app/_components/Header";

const GeographyChart = () => {
  const theme = useTheme();
  return (
    <Container fixed>
      <Header title={"Geography"} subTitle={"Simple Geography Chart"} />
      <Container
        sx={{
          height: "75vh",
          border: `1px solid ${theme.palette.text.primary}`,
          borderRadius: 2,
        }}
        fixed
      >
        <Geo isDashbord={false} />
      </Container>
    </Container>
  );
};

export default GeographyChart;
