"use client";
import Header from "@/app/_components/Header";
import Line from "./Line";
import { Container } from "@mui/material";

const LineChart = () => {
  return (
    <Container sx={{ height: "75vh" }} fixed>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
      <Line isDahboard={false} />
    </Container>
  );
};

export default LineChart;
