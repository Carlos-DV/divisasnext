import { Edit, LocationOn } from '@mui/icons-material'
import { Autocomplete, Avatar, Box, Button, Card, Chip, Container, Divider, Grid, IconButton, LinearProgress, Stack, Switch, TextField, Typography  } from '@mui/material'
import { grey } from '@mui/material/colors'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import useSucursalTipoCambio from '../hooks/useSucursalTipoCambio'
import styles from '../styles/Home.module.css'
import { months } from '../Sucursales/meses'
import { sucursales } from '../Sucursales/sucursales'
import { formatDate, formatDateOk, formatearFecha, lastFecha } from "../helpers/helpers"
import TableDivisa from '../components/TableDivisa'
import Loading from '../components/Loading'
import WhatDay from '../components/WhatDay'
import useAlert from '../hooks/useAlert'
import Alerta from '../components/Alerta'

const sucursalOptions = sucursales.map(sucursal => (
  {
    id: sucursal.id,
    label: sucursal.name,
    idFormat: sucursal.idSucursal
  }
))

const monthOptions = months.map(month => (
  {
    id: month.id,
    label: month.name,
    idFormat: month.dateModify
  }
))

const sucursalOptionsObj = {
  options: sucursalOptions,
}
const monthOptionsObj = {
  options: monthOptions,
  getOptionLabel:(option) => option.label || ''
}


export default function Home() {

  const { sucursal, setSucursal, submitSucursal, tipoCambioBySucursales,loading } = useSucursalTipoCambio()
  const { handleAlert, alertContext } = useAlert()
  const [mes, setMes] = useState(null)

  const yearRN = new Date(Date.now());
  const year = yearRN.getFullYear()
  const mesGG = mes?.idFormat
  const sucursalGG = sucursal?.idFormat

  const handleSubmit = async e => {
    e.preventDefault()

    if([sucursal, mes].includes('') || sucursal === null || mes === null){
      handleAlert('Favor de seleccionar una sucursal con un mes valido', true)
      return
    }

    const dateFormatOk = `${year}-${parseInt(mesGG?.substring(0,2))}-01`
    const formateo = new Date(dateFormatOk)
    formateo.setMinutes(formateo.getMinutes() + formateo.getTimezoneOffset())
    // //console.log(formateo)
    const dateFinalFactura = formateo;
    //console.log(dateFinalFactura)
    const lF = lastFecha(dateFinalFactura)
    const dateFormatFinal = (formatearFecha(lF))
    const addDate = dateFormatFinal.replace(/\-/g, "");
    //console.log(`${sucursalGG}-${year}${mesGG}-${addDate}`)
    await submitSucursal(`${sucursalGG}-${year}${mesGG}-${addDate}`)
}
  const {msg} = alertContext

  return (
    <>
     
      <Header/>
      <Container>
      {msg && <Alerta alertContext={alertContext}/>}
      <form
        onSubmit={handleSubmit}
      >
        <Card
          variant="outlined"
          sx={{padding:'20px',borderRadius:'10px'}}
          className='box-shadow'
        >
          
          <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item 
                xs={12}
                md={5}
              >
                <Autocomplete
                  disablePortal
                  size='small'
                  disableClearable
                  id='sucursales'
                  // options={sucursalOptions}
                  {...sucursalOptionsObj}
                  // getOptionLabel={(option) => option.label || ""}
                  value={sucursal}
                  onChange={(event, newValue)=>setSucursal(newValue)}
                  isOptionEqualToValue={ (option,value) => (option.value === value.value) }
                  sx={{marginY:'20px', textTransform: 'uppercase'}}
                  // fullWidth 
                  renderInput={(params) => 
                    <TextField 
                      {...params} 
                      label="sucursal" 
                      value={sucursal}
                      onChange={ e => setSucursal( e.target.value )}
                      
                    />}
                />
              </Grid>
              <Grid
                item 
                xs={12}
                md={5}
              >
                <Autocomplete
                  disablePortal
                  size='small'
                  disableClearable
                  {...monthOptionsObj}
                  isOptionEqualToValue={ (option,value) => (option.value === value.value) }
                  value={mes}
                  onChange={(event, newValue)=>setMes(newValue)}
                  sx={{marginY:'20px', textTransform: 'uppercase'}}
                  // fullWidth 
                  renderInput={(params) => 
                    <TextField 
                      className='tf'
                      {...params} 
                      label="Mes"
                    />
                  }
                />
              </Grid>
              <Grid
                item 
                xs={12}
                md={2}
              >
                <Button 
                  color="primary"
                  size="medium"
                  variant="contained"
                  fullWidth
                  type='submit'
                >Buscar
                </Button>
              </Grid>
              
          </Grid>
          </Card>
        </form>
      </Container>
      {
        loading 
          ? 
            <Loading/>
          :
            tipoCambioBySucursales.msg?.length>1 
              ?
                <Typography sx={{textTransform:'uppercase', textAlign:'center', marginTop:'4rem'}}>{tipoCambioBySucursales.msg}</Typography>
              :
                tipoCambioBySucursales?.length>=1 
                  ? 
                    <TableDivisa/> 
                  : 
                    <Typography sx={{textTransform:'uppercase', textAlign:'center', marginTop:'4rem'}}>{tipoCambioBySucursales.error}</Typography>
      }
    </>
  )
}
