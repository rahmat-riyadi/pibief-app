import { 
  Box, 
  Typography,
  InputBase,
  Button
} from '@mui/material'

import { authentication } from '../reducer/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { toast } from 'react-toastify'

export const baseInputStyle = {
	width: '100%',
	mt: 1,
	fontSize: '12px',
	p: 1,
	borderRadius: '4px',
	bgcolor: '#F5F8FA'   
}

export const baseTextStyle = {
	fontSize: '12px', 
	fontWeight: '300', 
	mt: 2, 
	alignSelf: 'flex-start'
}

export const forgotPasswordStyle = {
	fontWeight: 300,
	textTransform: 'capitalize',
	fontSize: '12px',
	p: 0,
	alignSelf: 'flex-end',
	mt: 1,
	color: 'secondary.main'
} 

export const boxStyle = {
	// boxShadow: '0px 0px 16px 0px #4787F31A', 
	width: '70%', 
	m: 'auto',
	borderRadius: '20px',
	display: 'flex',
	flexDirection: 'column',
	py: 5,
	px: 5,
	boxSizing: 'border-box',
	alignItems: 'flex-start',
}

export const baseButtonStyle = {
	textTransform: 'capitalize',
	width: '100%',
	mt: 2,
	boxShadow: 'none'
}

const ErrorText = ({ text }) => {
  return <Typography variant='body1' sx={{ color: 'red', fontSize: '12px', mt: '5px' }} >{text}</Typography>
}

const Login = () => {

	const [visible, setVisible] = useState(false)

	const { isLoading } = useSelector(state => state.userReducer )
	const { register, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

	const navigate = useNavigate()
  const dispatch = useDispatch()

	const onSubmit = data => {
    
    dispatch(authentication(data))
    .unwrap()
    .then((res) => {
      console.log(res)
      navigate('/')
    })
    .catch((err) => {
      console.log(err)

			if(err.responseMessage.includes('email')){
				setError('email',{ types: 'incorrect', message: 'Email tidak terdaftar!' })
			}
			
			if( !err.responseMessage.includes('email') && err.responseMessage.includes('Password')){
				setError('password',{ types: 'incorrect', message: 'Password anda salah!' })
			}

      toast.error('login gagal', {
        position: 'top-center',
      })
    })
  }

	return (
		<Box sx={boxStyle} >
			<Typography variant='body1' sx={{ fontWeight: '500', fontSize: '18px' }} >Selamat Datang</Typography>
			<Typography variant='body1' sx={{ fontSize: '14px', fontWeight: '300', mt: 1, color: 'greyFont.main' }} >Silahkan masukkan Username dan Password untuk mengakses akun anda</Typography>
			<Typography variant='body1' sx={{ ...baseTextStyle, mt: 3 }} >Email</Typography>
			<InputBase
				sx={{ ...baseInputStyle }}
				{...register('email', {
					required: {
						value: true,
						message: 'Masukkan email anda!',
					},
				})}
			/>
			{errors.email && <ErrorText text={errors.email.message}/>}
			<Typography variant='body1' sx={{ ...baseTextStyle, mt: 2 }} >Password</Typography>
			<InputBase
				sx={{ ...baseInputStyle }}
				type={visible ? 'text' : 'password'}
				endAdornment={
					visible ?
						<Visibility fontSize='small' sx={{ cursor: 'pointer' }} onClick={() => setVisible(!visible)} />
						:
						<VisibilityOff fontSize='small' sx={{ cursor: 'pointer' }} onClick={() => setVisible(!visible)} />
				}
				{...register('password', {
					required: {
						value: true,
						message: 'Masukkan password anda!'
					}
				})}
			/>
			{errors.password && <ErrorText text={errors.password.message} />}
			<Button 
				variant='text' 
				sx={forgotPasswordStyle} 
				onClick={ () => navigate('/forgot-password') }
			>
				Lupa Password ?
			</Button>
			<Button
				variant='contained'
				sx={{ ...baseButtonStyle, bgcolor: 'secondary.main' }}
				onClick={handleSubmit(onSubmit)}
			>
				{isLoading ? 'Loading...' : 'Masuk'}
			</Button>
			<Typography variant='body1' sx={{ alignSelf: 'center', fontSize: '12px', fontWeight: '300', color: '#121215', mt: 4 }} >
				Anda belum memiliki akun? <Link to='/registration' style={{ textDecoration: 'none', color: '#05A5E1', fontWeight: '600' }} >Daftar Disini</Link>
			</Typography>
		</Box>
	)
}

export default Login