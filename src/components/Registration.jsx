import { 
  Box, 
  Typography,
  InputBase,
  Button,
  Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	IconButton
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../helper/axios'
import { Close } from '@mui/icons-material'

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

const Registration = () => {

	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const [showDialog, setShowDialog] = useState(false)

	const { register, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      name: ''
    }
  })

	const onSubmit = async (data) => {

		setLoading(true)
    await axios.post('/daftar', { nama: data.name, email: data.email })
    .then((res) => {
      console.log('success :', res)
			setShowDialog(true)
    })
    .catch((err) => {

		if(err.response.data.responseMessage.includes('email')){
			setError('email',{ types: 'incorrect', message: 'Masukan format email dengan benar' })
		}

		if(err.response.data.responseMessage.includes('Email')){
			setError('email',{ types: 'incorrect', message: 'Email sudah ada!' })
		}

    })
		setLoading(false)
  }

	return (
		<Box sx={boxStyle} >
			<Typography variant='body1' sx={{ fontWeight: '500', fontSize: '18px' }} >Selamat Datang</Typography>
			<Typography variant='body1' sx={{ fontSize: '14px', fontWeight: '300', mt: 1, color: 'greyFont.main' }} >Silahkan daftar untuk bisa mengakes pibief anda</Typography>
			<Typography variant='body1' sx={{ ...baseTextStyle, mt: 2 }} >Nama</Typography>
			<InputBase
				sx={{ ...baseInputStyle }}
				{...register('name', {
					required: {
						value: true,
						message: 'Masukkan nama anda!'
					}
				})}
			/>
			{errors.name && <ErrorText text={errors.name.message} />}
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
			<Button
				variant='contained'
				sx={{ ...baseButtonStyle, bgcolor: 'secondary.main', mt: 3 }}
				onClick={handleSubmit(onSubmit)}
			>
				{loading ? 'Loading...' : 'Daftar'}
			</Button>
			<Typography variant='body1' sx={{ alignSelf: 'center', fontSize: '12px', fontWeight: '300', color: '#121215', mt: 4 }} >
				Anda sudah memiliki akun? <Link to='/login' style={{ textDecoration: 'none', color: '#05A5E1', fontWeight: '600' }} >Login Disini</Link>
			</Typography>
			<Dialog
				open={showDialog}
				onClose={ () => setShowDialog(false) }
			>
				<DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }} >
					Registrasi Berhasil !
					<IconButton onClick={() => {
						setShowDialog(false)
						navigate('/login')
					}}>
						<Close/>
					</IconButton>
				</DialogTitle>
				<DialogContent >
					<Typography variant='body1' >
						silahkan cek email anda untuk melakukan aktivasi akun
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button 
						variant='contained' 
						sx={{ width: '100%', mb: 1 }}
						onClick={ () => navigate('/login') }
					>
						oke
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}

export default Registration