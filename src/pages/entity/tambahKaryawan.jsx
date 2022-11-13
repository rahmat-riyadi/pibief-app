import { AddRounded } from "@mui/icons-material"
import { 
	Box,
	Typography,
	InputLabel,
	FormGroup,
	InputBase,
	NativeSelect,
	Button
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
			<Stack direction='row' justifyContent='space-between' columnGap={5} sx={{ mb: 2 }} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Golongan Darah' target='golongan_darah' />
					<InputBase id='golongan_darah' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='No. BPJS' target='no_bpjs' />
					<InputBase id='no_bpjs' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Tanggal Join' target='tanggal_join' />
					<InputBase id='tanggal_join' sx={baseInputStyle}  />
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
						<option>Romang Polong</option>
					</NativeSelect>
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Kab/Kota' target='kota' />
					<InputBase id='kota' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Kecamatan' target='kecamatan' />
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
					<CustomLabel label='Kelurahan' target='kelurahan' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>Romang Polong</option>
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
			<Button 
				startIcon={<AddRounded/>} 
				variant='text'
				color='secondary' 
				sx={{ textTransform: 'capitalize', fontWeight: 500, mb: 3 }}
			>
				Tambah Domisili
			</Button>
			<SectionDivider title='Data Bank' />
			<Stack direction='row' justifyContent='space-between' columnGap={5} sx={{ mb: 2 }} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='No. Rekening' target='no_rekening' />
					<InputBase id="no_rekening" sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Bank' target='bank' />
					<NativeSelect 
						input={<InputBase/>}
						sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
					>
						<option></option>
						<option>BNI</option>
						<option>BRI</option>
						<option>DANAMON</option>
					</NativeSelect>
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Kode Bank' target='kode_bank' />
					<InputBase id='kode_bank' sx={baseInputStyle} />
				</FormGroup>
			</Stack>
			<SectionDivider title='Data Sosial Media' />
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Facebook' target='fb' />
					<InputBase id='fb' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Instagram' target='ig' />
					<InputBase id='ig' sx={baseInputStyle} />
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='space-between' columnGap={5} >
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Linkedin' target='linkedin' />
					<InputBase id='linkedin' sx={baseInputStyle} />
				</FormGroup>
				<FormGroup sx={{ width: '100%' }} >
					<CustomLabel label='Twitter' target='twitter' />
					<InputBase id='twitter' sx={baseInputStyle} />
				</FormGroup>
			</Stack>
			<Stack direction='row' justifyContent='flex-end' sx={{ mt: 2 }} >
				<Button 
					variant='text' 
					color='secondary'
					sx={{ textTransform: 'capitalize', width: '268px' }}
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

export default TambahKaryawan