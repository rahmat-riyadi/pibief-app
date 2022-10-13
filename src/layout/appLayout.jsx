import { 
  Box,
  Container,
  Stack,
  Typography
} from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const AppLayout = () => {
  return (
    <Container maxWidth={false} sx={{ height: '100vh', display: 'flex', p: '0 !important' }} >
        <Sidebar/>
        <Stack sx={{ flex: 1, bgcolor: '#fff', overflowY: 'auto', position: 'relative', }} >
          <Navbar/>
          <Box sx={{ flex: 1, m: 4}} >
            <Outlet/>
          </Box>
          <Box sx={{ display: 'flex', p: '12px', borderTop: '1px solid #EAEAEA' }} >
            <Typography variant='body1' sx={{ color: '#121215', m: 'auto', fontSize: '12px', fontWeight: '600' }} >
              © Copyright 2022 - Pibief
            </Typography>
          </Box>
        </Stack>
    </Container>
  )
}

export default AppLayout