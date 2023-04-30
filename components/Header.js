import { AppBar, Box, Button, Card, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Header = () => {
  return (
        <>
          <Grid      
            component={'div'}
            display={'flex'}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            // width={'1'}
            sx={{ backgroundColor: 'primary.main', padding: 2, marginBottom: '25px'}}
          >
              <img 
                  src="https://ancona.s3.us-east-2.amazonaws.com/logo/logo-ancona.webp" 
                  alt="logo-ancona" 
                  loading="lazy"
                  style={{
                    objectFit:'cover',
                    width:'300px',
                  }}
              />
              <Typography
                variant='h5'
                component={'h5'}
                color={'white'}
                textTransform={'uppercase'}
              >
                Ancona Tipo de Cambio
              </Typography>
          </Grid> 
        </>
  )
}

export default Header