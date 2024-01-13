import { Alert, Slide, Snackbar } from '@mui/material'
import React from 'react'

const AlertNotif = ({ visible, onClose, type = 'success', message }) => {
  return (
    <Snackbar
        open={visible}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={onClose}
        autoHideDuration={5000}
        TransitionComponent={Slide}
      >
        <Alert severity={type} >
            {message}
        </Alert>
      </Snackbar>
  )
}

export default AlertNotif