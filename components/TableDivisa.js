import useSucursalTipoCambio from '../hooks/useSucursalTipoCambio'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { formatDate, formtMoney } from '../helpers/helpers';
import { Box, Button, IconButton, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import ActionButton from './ActionButton';
import ModalDivisa from './ModalDivisa';


const TableDivisa = () => {
    const { tipoCambioBySucursales, handleEditModal, modalFormChangeDate } = useSucursalTipoCambio()
    const [rowId, setRowId] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const columns = [
      { field: 'Fecha', headerName: 'Fecha', width: 130, flex: 1, headerAlign: 'center', align: "center",
      valueFormatter: (params) => {
        if (params.value ===  null) {
          return "";
        }

        const valueFormatted = formatDate(params.value);
        return `${valueFormatted}`;
      }
      },
      { field: 'Divisa', headerName: 'Divisa', width: 130, flex: 1, headerAlign: 'center',  align: "center"},
      { field: 'Valor', headerName: 'Valor', width: 130, flex: 1, headerAlign: 'center', align: "center",
      valueFormatter: (params) => {
        const valueFormatted  = params.value === null ? '$0.00' : formtMoney(params.value)
        return `${valueFormatted}`; 
      }
      },
      { field: 'Accion', headerName: 'Accion', width: 130, flex: 1, headerAlign: 'center',  align: "center", 
      renderCell: (params) => (
        <ActionButton
        params={params.row}
        />
      )
      
      },
    ]

    const rows = tipoCambioBySucursales?.map(tipoCambioBySucursal => {
      return {
        id: tipoCambioBySucursal.RateDate,
        Fecha: tipoCambioBySucursal.RateDate,
        Divisa: tipoCambioBySucursal.Currency,
        Valor: tipoCambioBySucursal.Rate,
      }
    })

    const [paginationModel, setPaginationModel] = useState({
      pageSize: 10,
      page: 0,
      
    });

  
    return (
      <Container
        sx={{ marginTop: '25px', marginBottom: '25px'}}
      >
      <div 
        style={{  width: '100%'}}
        className='box-shadow'
      >
        <div style={{  width: '100%', height: '600px'}}>

          <DataGrid
            columns={columns}
            rows={rows}
            getRowId={(row)=> row.id}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions= {[10,20,31]}
          />

        </div>
      </div>
      <ModalDivisa/>
      </Container>
    )
}

export default TableDivisa