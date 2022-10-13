import {
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'

import { ToastContainer } from 'react-toastify'
import logo from '../../assets/image/logo.svg'
import { Navigate, Outlet } from 'react-router-dom'
// import image from '../assets/image/login.svg'

const LoginPage = () => {

  if(JSON.parse(localStorage.getItem('auth'))){
    return <Navigate to='/' />
  }

  return (
    <Container maxWidth={false} sx={{ padding: '0 !important' }} >
      <Grid container sx={{ height: '100vh' }} >
        <Grid item md={6} sx={{ background: 'linear-gradient(180deg, #012257 0%, #05A5E1 132.99%)' }}>
          <Stack direction='column' alignItems='center' justifyContent='space-between' sx={{ py: '70px', boxSizing: 'border-box', height: '100%' }} >
            <img src={logo} alt="" width='150' />
            <Typography variant='body1' sx={{ fontWeight: '300', color: '#fff' }} >
              Pharmacy Efficiency Distribution { (JSON.parse(localStorage.getItem('auth')) ? 'benar' : 'salah')}
            </Typography>
          </Stack>
          {/* <img src={image} alt="" style={{ width: '100%' }} /> */}
        </Grid>
        <Grid item md={6} sx={{ display: 'flex' }} >
          {/* <RenderIf pos={pos} /> */}
          <Outlet/>
        </Grid>
      </Grid>
      <ToastContainer/>
    </Container>
  )
}

export default LoginPage