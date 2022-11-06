import { CloseRounded } from "@mui/icons-material";
import { 
	Box,
	Typography,
	Stack,
	Button,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableBody,
	Table,
	Drawer,
	IconButton,
	Divider,
	InputLabel,
	InputBase,
	FormGroup,
	NativeSelect
} from "@mui/material";
import { useState } from "react";

const tableHeadStyle = {
	border: 'none', 
	bgcolor: '#F1F3F5', 
	fontSize: '12px', 
	color: 'greyFont.main',
	py: 1
}

const tableDataStyle = {
	fontSize: 12,
	py: 2
}

const baseInputStyle = {
	bgcolor: '#F5F8FA', 
	py: 1, 
	px: 2, 
	fontWeight: '500'	,
	mb: 2
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

const VendorEntity = () => {

	const [openDrawer, setOpenDrawer] = useState(false)

	let tableData = [
		{
			perusahaan: 'PT. Khinta Permai',
			kabupaten: 'Makassar',
			alamat: 'Jl. Amirullah No.13',
			telepon: '087819582058',
			email: 'rahmatriyadi171102@gmail.com',
		},
		{
			perusahaan: 'PT. Banteng Merah',
			kabupaten: 'Sinjai',
			alamat: 'Jl. A.P Pettarani',
			telepon: '087819582058',
			email: 'nurhikma113@gmail.com',
		},
	]

	for(let i = 0; i < 10; i++){
		tableData.push(tableData[i % 2])
	}


  return (
		<Box>
			<Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
        Vendor
      </Typography>
			<Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="body1" sx={{ fontWeight: "300", fontSize: 12 }}>
          Tampilkan 10 Vendor
        </Typography>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          sx={{
            width: "fit-content",
            color: "#fff",
            textTransform: "capitalize",
          }}
          onClick={() => setOpenDrawer(true)}
        >
          Tambah Vendor
        </Button>
			</Stack>
			<TableContainer  >
				<Table>
					<TableHead >
						<TableRow  >
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '20px', pl: 2  }} >
								No.
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Perusahaan
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Kabupaten
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Alamat
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Telepon
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Email
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px', pr: 2  }} >
								Aksi
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData.map((e,i) => (
							<TableRow id={i} hover >
								<TableCell padding='none'  sx={{ ...tableDataStyle, pl: 2, color: '#121215', width: '10px' }} >
									{i+1}
								</TableCell>
								<TableCell padding='none' sx={{ display: 'flex', flexDirection: 'column', ...tableDataStyle, fontWeight: '600', fontSize: '14px' }} >
									{e.perusahaan}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.kabupaten}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.alamat}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.telepon}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.email}
								</TableCell>
								<TableCell padding ='none' sx={{ pr: 2 }}  >
									<Stack direction='row' justifyContent='space-between' >
										<Button color='greyFont' variant='outlined' size='small' sx={{ textTransform: 'capitalize', fontSize: '12px', p: '4px 8px' }} onClick={() => {}}   >
											Lihat
										</Button>
										<Button 
											color='greyFont' 
											variant='outlined' 
											size='small' 
											sx={{ textTransform: 'capitalize', fontSize: '12px', p: '4px 8px' }}   
											// onClick={() => dispatch(changeStatus(true))}
										>
											Hapus
										</Button>
									</Stack>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Drawer
				anchor="right"
				open={openDrawer}
			>
				<Box
					sx={{ 
						width: '570px'
					}}
				>
					<Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 2, py: 1 }} >
						<Typography variant='body1' sx={{ fontWeight: '600', fontSize: '18px' }} >
							Tambah Vendor
						</Typography>
						<IconButton sx={{ width: 'fit-content' }} onClick={ () => setOpenDrawer(false) } >
							<CloseRounded/>
						</IconButton>
					</Stack>
					<Divider/>
					<Stack sx={{ px: '32px', py: '24px' }} >
						<FormGroup>
							<CustomLabel label='Nama Perusahaan' target='nama_perusahaan' />
							<InputBase id="nama_perusahaan" sx={baseInputStyle} />
						</FormGroup>
						<FormGroup>
							<CustomLabel label='Email' target='email' />
							<InputBase id="email" sx={baseInputStyle} />
						</FormGroup>
						<FormGroup>
							<CustomLabel label='No. Telp' target='telepon' />
							<InputBase id="telepon" sx={baseInputStyle} />
						</FormGroup>
						<Stack direction='row' justifyContent='space-between' columnGap={5} >
							<FormGroup sx={{ width: '100%' }} >
								<CustomLabel label='Provinsi' target='provinsi' />
								<NativeSelect
									input={<InputBase />}
									sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
								>
									<option>Pilih Porvinsi</option>
									<option>Sulawesi Selatan</option>
									<option>Sulawesi Barat</option>
								</NativeSelect>
							</FormGroup>
							<FormGroup sx={{ width: '100%' }} >
								<CustomLabel label='Kabupaten/Kota' target='kota' />
								<NativeSelect 
									input={<InputBase/>}
									sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
								>
									<option>Pilih Kota/Kabupaten</option>
									<option>Makassar</option>
									<option>Gowa</option>
								</NativeSelect>
							</FormGroup>
						</Stack>
						<Stack direction='row' justifyContent='space-between' columnGap={5} >
							<FormGroup sx={{ width: '100%' }} >
								<CustomLabel label='Kecamatan' target='kecamatan' />
								<NativeSelect
									input={<InputBase />}
									sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
								>
									<option>Pilih Kecamatan</option>
									<option>Sombaopu</option>
								</NativeSelect>
							</FormGroup>
							<FormGroup sx={{ width: '100%' }} >
								<CustomLabel label='Kelurahan' target='kelurahan' />
								<NativeSelect 
									input={<InputBase/>}
									sx={{ ...baseInputStyle, "&:focus": { bgcolor: '#F5F8FA' } }} 
								>
									<option>Pilih Kelurahan</option>
									<option>Romang Polong</option>
								</NativeSelect>
							</FormGroup>
						</Stack>
						<FormGroup>
							<CustomLabel label='Detail Alamat' target='alamat' />
							<InputBase 
								id="alamat" 
								multiline 
								sx={baseInputStyle} 
								rows={3}
							/>
						</FormGroup>
						<Stack direction='row' sx={{ mt: 2 }} >
							<Button 
								variant='outlined' 
								color='secondary'
								sx={{ textTransform: 'capitalize', width: '100px', mr: 2 }}
							>
								Batal
							</Button>
							<Button 
								variant='contained' 
								color='secondary'
								disableElevation
								sx={{ textTransform: 'capitalize', color: '#FFF', width: '100px' }}
							>
								Simpan
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Drawer>
		</Box>
	)
};

export default VendorEntity