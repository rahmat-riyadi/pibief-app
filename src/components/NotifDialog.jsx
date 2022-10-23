import { 
	Dialog,
	Stack,
	Typography,
	Button
} from '@mui/material'
import warning from '../assets/image/warning.svg'
import success from '../assets/image/done.svg'
import { useSelector, useDispatch } from 'react-redux'
import { changeStatus } from '../reducer/notifDialogSlice'

const NotifDialog = ({ message, status, onAccept }) => {

	const { show } = useSelector( state => state.notifDialogReducer )

	const dispatch = useDispatch()

  return (
    <Dialog
			open={show}
    >
			<Stack sx={{ m: 3 }} direction='column' alignItems='center' >
				<img src={ status ? success : warning} alt={ status ? success : warning } style={{ width: '100px' }} />
				{/* <img src={success} alt="success" /> */}
				<Typography variant='body1' sx={{ my: 3, color: '#181C32', fontSize: '14px' }} >
					{message}
				</Typography>
				{
					!status
					&&
					<Stack direction='row' justifyContent='space-between' columnGap='20px' sx={{ width: '100%' }} >
						<Button 
							variant='outlined'
							color='secondary'
							sx={{ textTransform: 'none', width: '132px' }}
							onClick={ () => dispatch(changeStatus(false)) }
						>
							Batal
						</Button>
						<Button 
							variant='contained'
							disableElevation
							color='secondary'
							sx={{ textTransform: 'none', width: '132px', color: '#fff' }}
							onClick={onAccept}
						>
							Ya, hapus
						</Button>
					</Stack>
				}
			</Stack>
    </Dialog>
  )
}

export default NotifDialog
