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
import { AddButton } from '../../../components/AddButton'
import BreadCrumbsNav from '../../../components/BreadCrumbs'
import { useNavigate } from 'react-router-dom'
import { FilterBox } from '../../../components/FilterBox'
import { KeyboardArrowRightRounded } from '@mui/icons-material'
import { TableButton } from '../../../components/TableButton'
import NotifDialog from '../../../components/NotifDialog'
import { useState } from 'react'

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

const ItemCard = () => {
    return(
        <Stack 
            direction='row' 
            alignItems='center' 
            sx={{ border: '1px solid #EAEAEA', borderRadius: '10px', p: 2, py: 2.5, minWidth: 'fit-content' }} 
        >
            <Stack mr={5} >
                <Typography variant='body1' sx={{ fontSize: '16px', fontWeight: 600, mb: 1 }} >
                    21
                </Typography>
                <Typography variant='body1' sx={{ fontSize: '12px', fontWeight: 400, color: 'greyFont.main' }} >
                    Produk Stok Tersedia
                </Typography>
            </Stack>
            <KeyboardArrowRightRounded color='secondary' fontSize='medium' />
        </Stack>
    )
}

const StokPersedian = () => {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)

    let tableData = [
		{
			bets: 'K/001',
			name: 'Paracetamol',
			category: 'Obat',
			satuan: 'Tablet',
			buy_price: 'Harga Beli',
			sell_price: 'Harga Jual',
			quantity: '120',
			status: 'jual',
		},
		{
			bets: 'K/001',
			name: 'Paracetamol lv 2',
			category: 'Obat',
			satuan: 'Tablet',
			buy_price: 'Harga Beli',
			sell_price: 'Harga Jual',
			quantity: '120',
			status: 'tahan',
		},
		
	]

    return(
        <Box>
            <BreadCrumbsNav/>
			<Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}  >
				<Typography variant='h5' sx={{ my: 2, fontSize: 21, fontWeight: 600 }} >
					Stok
				</Typography>
				<AddButton
					title='Tambah Stok'
					onClick={ () => navigate('tambah') }
				/>
			</Stack>
            {/* <Stack sx={{ overflowX: 'scroll', width: '100%' }} direction='row' mb={4} columnGap={5} > */}
            <Box sx={{ 
                display: 'flex', 
                mb: 4, 
                columnGap: 2,
                overflowX: 'scroll',
                '&::-webkit-scrollbar' : {
                    display: 'none'
                },
            }} >
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </Box>
            {/* </Stack> */}
			<FilterBox/>
            <TableContainer  >
				<Table>
					<TableHead >
						<TableRow  >
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '20px', pl: 2, pr: 5  }} >
								Bets
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Nama Produk
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
                                Kategori
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Satuan
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Harga Beli
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
                                Harga Jual
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
                                Jumlah
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
                                Status
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
									{e.bets}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.name}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.category}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.satuan}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.buy_price}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.sell_price}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.quantity}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.status}
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

export default StokPersedian