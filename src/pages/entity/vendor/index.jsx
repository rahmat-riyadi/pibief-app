import { CloseRounded, KeyboardArrowDownRounded, SearchOutlined } from "@mui/icons-material";
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
	NativeSelect,
	Dialog,
	DialogTitle,
	DialogContent
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../../components/AddButton";
import BreadCrumbsNav from "../../../components/BreadCrumbs";
import NotifDialog from "../../../components/NotifDialog";
import { TableButton } from "../../../components/TableButton";
import DetailVendorDialog from '../../../components/DetailVendorDialog'

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

const DialogRow = ({ label1, text1, label2, text2 }) => {
  return (
    <Stack direction="row">
      <Typography variant="body1" sx={{ fontWeight: "500", flex: 1 }}>
        {label1}
        <Typography variant="body1" sx={{ fontWeight: "300", mt: 1 }}>
          {text1}
        </Typography>
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "500", flex: 1 }}>
        {label2}
        <Typography variant="body1" sx={{ fontWeight: "300", mt: 1, mb: 2 }}>
          {text2}
        </Typography>
      </Typography>
    </Stack>
  );
};

const ModalRow = props => {

  const titleStyle = { fontSize: "16px", fontWeight: "500", flex: 1 }
  const textStyle = { fontSize: "13px", color: '#121215', fontWeight: "300", mt: 0.5 }

  return(
   <Stack direction='row' mb={2} >
      <Typography variant="body1" sx={titleStyle} >
        {props.title1}
        <Typography sx={textStyle} >
          {props.text1}
        </Typography>
      </Typography>
      <Typography variant="body1" sx={titleStyle} >
        {props.title2}
        <Typography sx={textStyle} >
          {props.text2}
        </Typography>
      </Typography>
   </Stack> 
  )

}

const CustomLabel = ({ label, target }) => {
	return(
		<InputLabel 
			htmlFor={target} 
			sx={{ fontWeight: 300, color: 'greyFont.main', mb: 1 }}
		>
			{label}
		</InputLabel>
	)
}

const SectionTitle = ({ title }) => {
	return(
			<Typography
					sx={{ 
							borderLeft: '3px solid #05A5E1',
							pl: 1.5,
							fontWeight: 600,
							mb: 1.8
					}}
			>
					{title}
			</Typography>
	)
}

const VendorEntity = () => {

	const [openDrawer, setOpenDrawer] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)
	const [showVendorModal, setShowVendorModal] = useState(false)
	const [detailDialog, setDetailDialog] = useState(false)

	const navigate = useNavigate()

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
			<BreadCrumbsNav/>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ mb: 2 }}
			>
        <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
					Vendor
				</Typography>
        <AddButton 
					title='Tambah Vendor'
					onClick={() => navigate('tambah')}
				/>
			</Stack>
			<Stack alignItems='center' direction='row' mb={2} >
				<InputBase 
					startAdornment={<SearchOutlined sx={{ mr: 1 }} />}
					sx={{ border: '1px solid #A6A8AE', py: .2, px: 1.5, borderRadius: '5px', width: '250px' }}
					placeholder='Cari Data'
				/>
				<Box flex={1} />
				<Typography variant='body1' sx={{ fontWeight: 300, color: 'greyFont.main', mr: 1 }} >
					Filter
				</Typography>
				<Button 
					variant='outlined' 
					color='secondary'
					endIcon={<KeyboardArrowDownRounded/>}
					size='small'
					sx={{ textTransform: 'none' }}
				>
					Semua
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
							<TableRow key={i} id={i} hover >
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
									<Stack direction='row' justifyContent='space-between' columnGap={1} >
										<TableButton
											title='Lihat'
											onClick={() => setShowVendorModal(true)}
										/>
										<TableButton
											title='Hapus'
											type='delete'
											onClick={() => setDeleteModal(true)}
										/>
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
			<Dialog
				open={detailDialog}
				PaperProps={{ sx: { width: '860px', maxWidth: 'unset' } }}
			>
				<DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 5
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            Detail Vendor
          </Typography>
          <IconButton onClick={ () => setDetailDialog(false)} >
            <CloseRounded />
          </IconButton>
        </DialogTitle>
				<DialogContent dividers sx={{ px: 3 }} >
					<DialogRow label1='Nama Perusahaan' text1='PT. Khinta Permai' />
					<Box sx={{ mb: 2 }} />
					<DialogRow 
						label1='Email' text1='khinta@gmail.com' 
						label2='No. Telepon' text2='087895012' 
					/>
					<DialogRow 
						label1='Provinsi' text1='Sulawesi Selatan' 
						label2='Kab/Kota' text2='Gowa' 
					/>
					<DialogRow 
						label1='Kecamatan' text1='Sombaopu' 
						label2='Kelurahan' text2='Romang Polong' 
					/>
					<DialogRow label1='Detail Alamat' text1='Jl. Amirullah No. 13 samping MARI' />
					<Stack direction='row' justifyContent='center' >
						<Button 
							variant='contained' 
							disableElevation
							size='large'
							sx={{ bgcolor: '#FFC329', textTransform: 'capitalize', fontWeight: '400', width: '130px', mt: 3.5, mb: 2}}
						>
							Edit
						</Button>
					</Stack>
				</DialogContent>
			</Dialog>
			<NotifDialog
				show={deleteModal}
				message="Apakah anda ingin menghapus data?"
				status='warning'
				onAcceptText="Ya, hapus"
				onCancelText='Batal'
				onAccept={() => setDeleteModal(false)} 
				onCancel={() => setDeleteModal(false)} 
			/>
			<DetailVendorDialog
				open={showVendorModal}
				onClick={() => setShowVendorModal(false)}
				onClose={() => setShowVendorModal(false)}
			>
				<SectionTitle title='Data Identitas' />
				<ModalRow 
          title1='Nama Cabang'
          text1='PT. Khinta'
          title2='Email'
          text2='khinta@gmail.com'
        />
				<ModalRow 
          title1='No. Telepon'
          text1='087818181'
          title2='No. Whatsapp'
          text2='09866732'
        />
				<ModalRow 
          title1='Tanggal Terbentuk'
          text1='17-11-2023'
        />
				<Box mt={3} />
				<SectionTitle title='Data Alamat' />
				<ModalRow 
          title1='Provinsi'
          text1='Sulawesi Selatan'
          title2='Kab/Kota'
          text2='Sinjai'
        />
				<ModalRow 
          title1='Kecamatan'
          text1='Mamajang'
          title2='Kelurahan'
          text2='Maricaya Selatan'
        />
				<ModalRow 
          title1='Detail Alamat'
          text1='Jln. Kenangan no 13'
        />
				<Button
					sx={{ bgcolor: '#FAB449', textTransform: 'none', fontSize: '12px', color: '#fff', px: 5 }}
				>
					Edit
				</Button>
			</DetailVendorDialog>
		</Box>
	)
};

export default VendorEntity