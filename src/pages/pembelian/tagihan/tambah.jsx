import { 
    Box, 
		Button, 
		InputBase, 
		Stack, 
		Typography 
} from "@mui/material"
import BreadCrumbsNav from "../../../components/BreadCrumbs"
// import { useForm } from "react-hook-form"

const InputLabel = ({ label }) => {
	return(
		<Typography sx={{ fontWeight: 300, mb: 1 }} >
			{label}
		</Typography>
	)
}

const inputBaseStyle = {
	bgcolor: '#F5F8FA',
	borderRadius: '5px',
	py: 0.7,
	px: 2
}

const btnBaseStyle = {
	flex: 1,
	textTransform: 'none',
	fontWeight: 600,
	fontSize: 13,
	py: 1
}

const TambahTagihan = () => {

	// const { register, handleSubmit, formState: { errors } } = useForm()

	return(
		<Box>
			<BreadCrumbsNav/>
			<Typography variant='body1' sx={{ fontSize: '21px', fontWeight: '600', my: 2 }} >
				Tambah Tagihan
			</Typography>
			<form >
				<Stack direction='row' columnGap={5} >
					<Stack flex={1} >
						<InputLabel label='Vendor' />
						<InputBase sx={inputBaseStyle} />
						<Box height={15} />
						<InputLabel label='Tanggal Pesan' />
						<InputBase sx={inputBaseStyle} type='date' />
					</Stack>
					<Stack flex={1} >
						<InputLabel label='Pembayaran' />
						<InputBase sx={inputBaseStyle} />
						<Box height={15} />
						<InputLabel label='Tanggal Jatuh Tempo' />
						<InputBase sx={inputBaseStyle} />
						<Box height={20} />
						<Stack direction='row' columnGap={2} >
							<Button
								variant="contained"
								disableElevation
								sx={{ 
									bgcolor: 'rgba(5, 165, 225, 0.1)',
									color: 'secondary.main',
									'&:hover': {
										bgcolor: 'rgba(5, 165, 225, 0.1)',
									},
									...btnBaseStyle
								}}
							>
								Batal
							</Button>
							<Button
								variant="contained"
								disableElevation
								color="secondary"
								sx={{ color: '#fff', ...btnBaseStyle }}
							>
								Tambah
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</form>
		</Box>
	)
}

export default TambahTagihan