import { Alert, Snackbar } from "@mui/material"

const Alerta = ({alertContext}) => {
  return (
    <>
        <Snackbar open={true} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right',}}>
          {
            alertContext.error ? 
            <Alert severity="error" elevation={3} variant="filled" sx={{textTransform:'uppercase'}} >
            {alertContext.msg}
          </Alert> 
          :
          <Alert severity="success" elevation={3} variant="filled" sx={{textTransform:'uppercase'}} >
          {alertContext.msg}
         </Alert> 
          }

        </Snackbar>
    </>
  )
}

export default Alerta