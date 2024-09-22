'use client'
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../_components/Header";

const ContactsInformation = () => {
  return (
      <>
        <Header title={"USER INFORMATION"} subTitle={"Show New User Profile"} />
        <Box sx={{ height: 600, minWidth: "800px", mx: "auto", overflowX: "auto" }}>
        <DataGrid
          sx={{ overflowX: "auto", p: 1 }}
          // al filter dh fe toolbar fe al component dataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
        </Box>
      </>
  );
};

export default ContactsInformation;
