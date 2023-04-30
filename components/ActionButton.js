import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import useSucursalTipoCambio from '../hooks/useSucursalTipoCambio';
import { lastFecha } from '../helpers/helpers';
import DoneIcon from '@mui/icons-material/Done';


const ActionButton = ({params}) => {
    const { tipoCambioBySucursales, handleEditModal, modalFormChangeDate, loading } = useSucursalTipoCambio()

    const [success, setSuccess] = React.useState(false);

    return (
        <>
            <IconButton
                onClick={() => handleEditModal(params)}
            >
                <EditIcon
                    size="small"
                    color='primary'
                />
            </IconButton>
        </>
    )
}

export default ActionButton