import { 
  Box, 
  Typography,
  InputBase,
  Button,
  CircularProgress,
} from '@mui/material'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

// import axios from '../helper/axios'

const boxStyle = {
  width: '70%', 
  m: 'auto',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  py: 5,
  px: 5,
  boxSizing: 'border-box',
  alignItems: 'flex-start'
}

const baseButtonStyle = {
  textTransform: 'capitalize',
  width: '100%',
  mt: 2,
  boxShadow: 'none'
}

const baseTextStyle = {
  fontSize: '12px', 
  fontWeight: '300', 
  mt: 2, 
  alignSelf: 'flex-start'
}

const baseInputStyle = {
  width: '100%',
  mt: 1,
  fontSize: '12px',
  p: 1,
  borderRadius: '4px',
  bgcolor: '#F5F8FA'   
}

const ForgotPassword = () => {

  const [loading, setLoading] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: ''      
    }
  })

  const onSubmit = async (data) => {
    setLoading(true)

    await cekEmail(data)

    setLoading(false)
  }

  const onChange = async (e) => {

    setEmailLoading(true)
    await setTimeout(() => {
      if(e.length >= 3){
         cekEmail(e)
      }
    }, 1000)
    setEmailLoading(false)

  }

  const cekEmail = async (email) => {

    
    // const response = await axios.post('/lupa-sandi/email',{
    //   email: email
    // })

    // console.log(response.data)

  }

  return (
    <Box sx={boxStyle} >
        <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '18px' }} >Lupa Sandi</Typography>
        <Typography variant='body1' sx={{ fontSize: '14px', fontWeight: '300', mt: 1, color: 'greyFont.main' }} >Silahkan masukkan Email anda yang terdaftar, dan kami akan mengirimi email tautan untuk mereset password anda</Typography>
        <Typography variant='body1' sx={{ ...baseTextStyle, mt: 3 }} >Email</Typography>
        <InputBase
            sx={{ ...baseInputStyle }}
            endAdornment={ 
              (emailLoading) ? <CircularProgress/> : null
            }
            // endAdornment={<CircularProgress/> }
            {...register('email',{
            required: {
              value: true,
              message: 'Masukkan email anda!'
            },
            onChange: (e) => onChange(e.target.value)
            })}
        />
        { errors.email && <Typography variant='body1' sx={{ color: 'red', fontSize: '12px', mt: '5px' }} >Email tidak terdaftar</Typography> }
        <Button
            variant='contained'
            sx={{ ...baseButtonStyle, bgcolor: 'secondary.main', my: '24px' }}
            onClick={handleSubmit(onSubmit)}
            // startIcon={ <Lo }
        >
            { loading ? 'Loading...' : 'Masuk'}
        </Button>
        <Typography variant='body1' sx={{ alignSelf: 'flex-start', fontSize: '12px', fontWeight: '300', color: '#121215' }} >
				  <Link to='/login' style={{ textDecoration: 'none', color: '#05A5E1' }} >Kembali</Link>
			  </Typography>
    </Box>
  )
}

export default ForgotPassword
