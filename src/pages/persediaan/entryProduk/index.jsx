import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import BreadCrumbsNav from '../../../components/BreadCrumbs'
import { AddButton } from '../../../components/AddButton'
import { useNavigate } from 'react-router-dom'
import { FilterBox } from '../../../components/FilterBox'
import { TableButton } from '../../../components/TableButton'
import { useState } from 'react'
import NotifDialog from '../../../components/NotifDialog'

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


const EntryProduk = () => {

	const navigate = useNavigate()

	const [showModal, setShowModal] = useState(false)

	let tableData = [
		{
			name: 'Rahmat Riyadi Syam',
			comp: 'PT. Insya Allah Sukses',
			product: "Bodre'",
			bets: '171102',
			satuan: 'Strap',
		},
	]

	for(let i = 0; i < 5; i++){
		tableData.push(tableData[0])
	}

	return(
		<Box>
			<BreadCrumbsNav/>
			<Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}  >
				<Typography variant='h5' sx={{ my: 2, fontSize: 21, fontWeight: 600 }} >
					Pesanan
				</Typography>
				<AddButton
					title='Tambah Pesanan'
					onClick={ () => navigate('tambah') }
				/>
			</Stack>
			<FilterBox/>
			<TableContainer>
				<Table>
					<TableHead >
						<TableRow  >
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '20px', pl: 2  }} >
								No
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Vendor
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Nama Produk
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Nomor Bets
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Satuan
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px', pr: 2  }} >
								Aksi
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData.map((e,i) => (
							<TableRow key={i} id={i} hover >
								<TableCell padding='none'  sx={{ ...tableDataStyle, pl: 2, color: '#121215' }} >
									{i+1}
								</TableCell>
								<TableCell padding='none' sx={{ display: 'flex', flexDirection: 'column', ...tableDataStyle, fontWeight: '600', fontSize: '14px' }} >
									{e.name}
									<Typography color='greyFont.main' sx={{ fontSize: '12px' }} >
										{e.comp}
									</Typography>
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.product}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.bets}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.satuan}
								</TableCell>
								<TableCell padding ='none' sx={{ pr: 2 }}  >
									<Stack direction='row' justifyContent='space-between' columnGap={1} >
										<TableButton
											title='Lihat'
											onClick={() => navigate('detail/1')}
										/>
										<TableButton
											title='Hapus'
											type='delete'
											onClick={() => setShowModal(true)}
										/>
									</Stack>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<NotifDialog
				show={showModal}
				message="Apakah anda ingin menghapus data?"
				status={false}
				onAcceptText="Ya, hapus"
				onCancelText='Batal'
				onAccept={() => setShowModal(false)} 
				onCancel={() => setShowModal(false)} 
			/>
		</Box>
	)

}

export default EntryProduk