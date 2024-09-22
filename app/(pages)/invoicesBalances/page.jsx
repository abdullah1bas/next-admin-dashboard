'use client'
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './data';
import Header from '@/app/_components/Header';

const InvoicesBalances = () => {
  return (
    <Box sx={{ height: 650 , minWidth: '800px', mx: 'auto' , overflowX: 'auto'}}>
      <Header
          title={"INVOICES"}
          subTitle={"List of Invoice Balances"}
        />
      <DataGrid sx={{overflowX: 'auto' , p: 1}}
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default InvoicesBalances;
