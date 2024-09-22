'use client'
import Header from "@/app/_components/Header";
import Bar from "./Bar";
import { Container } from "@mui/material";

const BarChart = () => {
  return (
    <Container sx={{ height: "75vh" }} fixed>
      <Header
        title={"Bar Chart"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <Bar isDashbord={false} />
    </Container>
  );
};

export default BarChart;
