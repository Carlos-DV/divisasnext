import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import useSucursalTipoCambio from '../hooks/useSucursalTipoCambio'
import ModalUnstyled from '@mui/base/ModalUnstyled';
import styled from '@emotion/styled';
import useAlert from '../hooks/useAlert';
import Alerta from './Alerta';

const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 400,
    // bgcolor: 'white',
    // borderRadius: 2,
    // boxShadow: 20,
    // pt: 2,
    // px: 4,
    // pb: 3,

    position: 'fixed',
    zIndex: 1300,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    // transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 400,
    // height: 200,
    bgcolor: 'white',
    // borderRadius: 2,
    // boxShadow: 20,
    // pt: 2,
    // px: 4,
    // pb: 3,
    
  };

const ModalDivisa = () => {

    const { sucursal, modalFormChangeDate, handleEditModal, currentRate,submitUpdateCurrentRate } = useSucursalTipoCambio()
    const { handleAlert, alertContext } = useAlert()
    const { Rate, RateDate, Fecha, Valor, id } = currentRate
    const [ currentCoin, setCurrentCoin] = useState('')
    // //console.log(sucursal)
    // //console.log(currentRate)

    const handleSubmit = async e => {
        //console.log(sucursal)
        e.preventDefault()
        if([currentCoin].includes('') || currentCoin === null) {
            handleAlert('Debes ingresar una cantidad', true)
            return
        }

        const dateOfById = Fecha.split('T')///ratedate
        const dateCreatedForId = dateOfById[0]
        const addDate = dateCreatedForId.replace(/\-/g, "");

        const generateId = `${sucursal.idFormat}-${addDate}`
        //console.log(generateId)
        await submitUpdateCurrentRate({currentCoin, generateId})
        handleAlert('Datos Actualizados correctamente')

    }

    useEffect(() => {
        if(currentRate?.Fecha) {
            setCurrentCoin(Valor)
            //console.log(currentCoin)
            return
        }
        setCurrentCoin('')
    }, [currentRate])

    const {msg} = alertContext

    return (
        <div>
            {msg && <Alerta alertContext={alertContext}/>}
            <Dialog open={modalFormChangeDate} onClose={handleEditModal}>
                <DialogTitle
                    sx={{textAlign:'center', textTransform:'uppercase'}}
                >Cambiar el tipo de divisa</DialogTitle>
                    <DialogContent
                        dividers
                    >
                        <form
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                id="outlined-required"
                                label="Divisa"
                                margin="dense"
                                type="number"
                                fullWidth
                                value={ currentCoin === null ? '0.00' : currentCoin }
                                onChange={ e => setCurrentCoin(e.target.value)}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{marginBottom: '10px', marginTop: '8px'}}
                                type='submit'
                            >
                            Editar
                            </Button>
                    </form>
                </DialogContent>
            </Dialog>
      </div>
  )
}

export default ModalDivisa