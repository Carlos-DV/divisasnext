import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'
import { currentFecha, formatDate } from '../helpers/helpers'

const WhatDay = () => {

    const dateRN = new Date()
    const formateo = new Date(dateRN)
    formateo.setMinutes(formateo.getMinutes() + formateo.getTimezoneOffset())
    const dateOk = currentFecha(formateo)

    return (
        <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: '50px' }}>
            <Card
                variant="outlined"
                sx={{padding:'10px',borderRadius:'10px', textAlign:'center'}}
                className='box-shadow'
            >
                <CardContent>
                    <Typography
                        sx={{ textTransform:'uppercase', marginY:'5px'}}
                        margin="dense"
                    >
                        ¿que día es hoy?
                        {' '}   {
                            formatDate(dateOk)
                        }
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default WhatDay