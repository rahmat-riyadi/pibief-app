import { 
	Box,
	Typography,
	InputLabel,
	FormGroup,
	InputBase,
	NativeSelect
} from "@mui/material"
import { Stack } from "@mui/system"

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
			sx={{ fontWeight: 600, borderLeft: '3px solid', borderColor: 'secondary.main', pl: 1, mb: 3 }} 
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

const TambahKaryawan = () => {
  return (
    <Box>
			<Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600, mb: 3 }}>
        Tambah Karyawan
      </Typography>
			<SectionDivider title='Data Identitas' />
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
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='No. Telpn' target='telepon' />
					<InputBase sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Nip' target='nip' />
					<InputBase sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Nik' target='nik' />
					<InputBase sx={baseInputStyle} />
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Jenis Kelamin' target='jenis_kelamin' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>Romang Polong</option>
					</NativeSelect>
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Agama' target='status' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>Romang Polong</option>
					</NativeSelect>
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Status' target='status' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>Romang Polong</option>
					</NativeSelect>
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Tempat Lahir' target='tempat_lahir' />
					<InputBase id='tempat_lahir' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Tanggal Lahir' target='tanggal_lahir' />
					<InputBase id='tanggal_lahir' sx={baseInputStyle} type='date' />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Suku' target='suku' />
					<InputBase id='suku' sx={baseInputStyle}  />
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Tinggi Badan' target='tinggi_badan' />
					<InputBase id='tinggi_badan' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Berat Badan' target='berat_badan' />
					<InputBase id='berat_badan' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Total Saudara' target='total_saudara' />
					<InputBase id='total_saudara' sx={baseInputStyle}  />
				</FormGroup>
			</Stack>
    </Box>
  )
}

export default TambahKaryawan