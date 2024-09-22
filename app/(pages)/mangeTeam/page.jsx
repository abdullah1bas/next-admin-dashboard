'use client'
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Button, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../_components/Header";

const MangeTeam = () => {
  const theme = useTheme();
  // columns[1].field.value === rows[1].key
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "email",
      headerName: "email",
      align: "center",
      headerAlign: "center",
      flex: 1,
      width: 150,
    },
    {
      field: "age",
      headerName: "age",
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "phone",
      headerName: "phone",
      align: "center",
      headerAlign: "center",
      flex: 1,
      width: 150,
    },
    {
      field: "access",
      headerName: "access",
      align: "center",
      headerAlign: "center",
      flex: 1,
      width: 150,
      // hena da key: anfn btrg3 ay 7aga 3ayzenha t7sl
      renderCell: ({ row: { access, name } }) => {
        // console.log(access)
        // console.log(name)
        return (
          <Button
            variant="contained"
            sx={{
              bgcolor:
                access == "Admin"
                  ? theme.palette.primary.dark
                  : access == "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              textTransform: "capitalize",
              fontSize: "13px",
              color: "white",
            }}
            startIcon={
              access == "Admin" ? (
                <AdminPanelSettingsOutlined />
              ) : access == "Manager" ? (
                <SecurityOutlined />
              ) : (
                <LockOpenOutlined />
              )
            }
          >
            {access}
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      {/* lazem parent height */}
      <Box
        sx={{ height: 600, minWidth: "800px", mx: "auto", overflowX: "auto" }}
      >
        <DataGrid
          sx={{ overflowX: "auto" }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
};

export default MangeTeam;
