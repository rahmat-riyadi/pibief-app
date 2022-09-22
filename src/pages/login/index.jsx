import {
    Box,
    Button,
    Container,
    Grid,
    InputBase,
    Stack,
    Typography
} from '@mui/material'

import {
    baseInputStyle,
    baseTextStyle,
    forgotPasswordStyle,
    boxStyle,
    baseButtonStyle
} from './style'

// import image from '../assets/image/login.svg'
import logo from '../../assets/image/logo.svg'
import React from 'react'


const Login = () => {
    return (
        <Container maxWidth={false} sx={{ padding: '0 !important' }} >
            <Grid container sx={{ height: '100vh' }} >
                <Grid item md={6} sx={{ background: 'linear-gradient(180deg, #012257 0%, #05A5E1 132.99%)' }}>
                    <Stack direction='column' alignItems='center' justifyContent='space-between' sx={{ py: '70px', boxSizing: 'border-box', height: '100%' }} >
                        <img src={logo} alt="" width='150' />
                        <Typography variant='body1' sx={{ fontWeight: '300', color: '#fff' }} >
                            Pharmacy Efficiency Distribution
                        </Typography>
                    </Stack>
                    {/* <img src={image} alt="" style={{ width: '100%' }} /> */}
                </Grid>
                <Grid item md={6} sx={{ display: 'flex' }} >
                    <Box sx={boxStyle} >
                        <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '18px' }} >Selamat Datang</Typography>
                        <Typography variant='body1' sx={{ fontSize: '14px', fontWeight: '300', mt: 1 }} >Silahkan Masukan Email dan Password Anda</Typography>
                        <Typography variant='body1' sx={{ ...baseTextStyle ,mt: 3 }} >Email</Typography>
                        <InputBase
                            sx={{ ...baseInputStyle }}
                        />
                        <Typography variant='body1' sx={{ ...baseTextStyle ,mt: 2 }} >Password</Typography>
                        <InputBase
                            sx={{ ...baseInputStyle }}
                        />
                        <Button variant='text' sx={forgotPasswordStyle} >Lupa Password</Button>
                        <Button variant='contained' sx={{ ...baseButtonStyle, bgcolor: 'primary`' }} >Masuk</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login