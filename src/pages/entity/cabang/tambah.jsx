import { 
	Box,
	Typography,
	Stack,
	FormGroup,
	InputBase,
	InputLabel,
	NativeSelect,
	Button
} from "@mui/material"

const baseInputStyle = {
	bgcolor: '#F5F8FA', 
	py: 1, 
	px: 2, 
	fontWeight: '500'	,
	mb: 2
}

const SectionDivider = ({ title }) => {
	return(
		<Typography 
			variant="body1" 
			sx={{ fontWeight: 600, borderLeft: '3px solid', borderColor: 'secondary.main', pl: 1.5, mb: 3 }} 
		>
			{title}
		</Typography>
	)
}

const CustomLabel = ({ label, target }) => {
	return(
		<InputLabel 
			htmlFor={target} 
			sx={{ fontWeight: 300, color: '#000', mb: 1 }}
		>
			{label}
		</InputLabel>
	)
}

const TambahCabang = () => {
  return (
    <Box>
			<Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600, mb: 3 }}>
        Tambah Cabang
      </Typography>
			<SectionDivider title='Data Umum' />
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Nama' target='nama' />
					<InputBase sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Email' target='email' />
					<InputBase sx={baseInputStyle} />
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='space-between' columnGap={5} sx={{ mb: 3 }} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='No. Telpon' target='telepon' />
					<InputBase id="telepon" sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='No. Whatsapp' target='wa' />
					<InputBase id='wa' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Tanggal Terbentuk' target='tanggal_terbentuk' />
					<InputBase sx={baseInputStyle} type='date' />
				</FormGroup>
			</Stack>
			<SectionDivider title='Data Alamat' />
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Provinsi' target='provinsi' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>Sulawesi Selatan</option>
						<option>Jawa Timur</option>
						<option>Malaku Utara</option>
					</NativeSelect>
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Kab/Kota' target='kota' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>Makassar</option>
						<option>Blitar</option>
						<option>Ternate</option>
					</NativeSelect>
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Kecamatan' target='kecamatan' />
					<InputBase id='kecamatan' sx={baseInputStyle} />
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Kelurahan' target='kelurahan' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>Maricaya Selatan</option>
					</NativeSelect>
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Detail Alamat' target='detail_alamat' />
					<InputBase id='detail_alamat' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Kode Pos' target='kode_pos' />
					<InputBase id='kode_pos' sx={baseInputStyle} />
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='flex-end' sx={{ mt: 2 }} columnGap={2.5} >
				<Button 
					variant='text' 
					color='secondary'
					sx={{ textTransform: 'capitalize', width: '268px', bgcolor: 'rgba(5, 165, 225, 0.1)' }}
				>
					Batal
				</Button>
				<Button 
					variant='contained'
					disableElevation 
					color='secondary'
					sx={{ textTransform: 'capitalize', width: '268px', color: '#fff' }}
				>
					Tambah
				</Button>
			</Stack>
    </Box>
  )
}

export default TambahCabang