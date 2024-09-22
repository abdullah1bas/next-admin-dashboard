'use client'
import { Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Header from "@/app/_components/Header";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const data = [
    {
      colName: "panel1",
      typeData: "General settings",
      summaryHeader: "I am an accordion",
      summarySubscribe:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
    },
    {
      colName: "panel2",
      typeData: "Users",
      summaryHeader: "You are currently not an owner",
      summarySubscribe:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      colName: "panel3",
      typeData: "Advanced settings",
      summaryHeader:
        "Filtering has been entirely disabled for whole web server",
      summarySubscribe:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    {
      colName: "panel4",
      typeData: "Personal data",
      summarySubscribe:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    // سطور إضافية
    {
      colName: "panel5",
      typeData: "Security settings",
      summaryHeader: "Enhance the security of your account",
      summarySubscribe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi in ullamcorper condimentum, justo nisi facilisis nunc, a accumsan lorem purus in sem.",
    },
    {
      colName: "panel6",
      typeData: "Notifications",
      summaryHeader: "Manage your notification preferences",
      summarySubscribe:
        "Curabitur bibendum ipsum a mauris sagittis, a finibus enim placerat. Morbi at semper justo, ac efficitur massa. Sed commodo risus vitae nunc finibus, non pellentesque nibh ultricies.",
    },
    {
      colName: "panel7",
      typeData: "Privacy settings",
      summaryHeader: "Control your privacy options",
      summarySubscribe:
        "Fusce sed imperdiet tellus. Integer non purus auctor, sollicitudin quam non, vehicula libero. Nunc sed dolor auctor, sagittis eros id, malesuada velit.",
    },
    {
      colName: "panel8",
      typeData: "Billing information",
      summaryHeader: "Manage your billing details",
      summarySubscribe:
        "Quisque a dignissim lacus, sit amet viverra urna. Aliquam elementum semper volutpat. Praesent semper at mauris vitae scelerisque.",
    },
  ];
  return (
    <Stack direction={"column"} gap={2}>
      <Header
          title={"FAQ"}
          subTitle={"Frequently Asked Questions Page"}
        />
      {data.map((item) => {
        return (
            <Accordion
              key={item.typeData}
              // @ts-ignore
              expanded={expanded === item.colName}
              onChange={handleChange(item.colName)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${item.colName}bh-content`}
                id={`${item.colName}bh-header`}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {item.typeData}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {item.summaryHeader}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.summarySubscribe}</Typography>
              </AccordionDetails>
            </Accordion>
        );
      })}
    </Stack>
  );
};

export default FAQ;
