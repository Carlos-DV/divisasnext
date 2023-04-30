import { CssBaseline } from '@mui/material'
import { AlertProvider } from '../context/AlertProvider'
import { SucursalTipoCambioProvider } from '../context/SucursalTipoCambioProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider>
      <SucursalTipoCambioProvider>
        <CssBaseline/>
        <Component {...pageProps} />
      </SucursalTipoCambioProvider>
    </AlertProvider>
  )
}

export default MyApp
