import { 
	Table, 
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Box,
	Typography,
	Stack,
	InputBase
} from "@mui/material"
import BreadCrumbsNav from "../../../components/BreadCrumbs"
import { TableButton } from "../../../components/TableButton"

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

const TableStatus = ({ status }) =>{
	
	return(
		<Box 
			sx={{ 
				width: 'fit-content', 
				p: '6px 8px', 
				bgcolor: status === 'Terverifikasi' ? 'rgba(80, 205, 137, 0.2)' : 'rgba(249, 161, 27, 0.2)',
				color: status === 'Terverifikasi' ? '#50CD89' : '#F9A11B',
				borderRadius: '3px'
			}} 
	>
			<Typography variant='body1' sx={{ fontSize: '12px' }} >
				{status}
			</Typography>
		</Box>
	)
}

const MenungguPembayaran = () => {

	let tableData = [
		{
			num: 'P-01',
			name: 'Rahmat Riyadi Syam',
			comp: 'PT. Khinta Permai',
			order_date: '21-10-2022',
			status: 'Terverifikasi',
			total: 'Rp. 962.620',
		},
		{
			num: 'P-01',
			name: 'Nurhikma',
			comp: 'PT. Khinta Permai',
			order_date: '21-10-2022',
			status: 'Menunggu',
			total: 'Rp. 962.620',
		}
	]

	for(let i = 0; i < 5; i++){
		tableData.push(tableData[i % 2])
	}

	return (
		<Box>
			<BreadCrumbsNav/>
			<Typography variant='body1' sx={{ fontSize: '21px', fontWeight: '600', my: 2 }} >
				Menunggu Pembayaran
			</Typography>
			<Box sx={{ bgcolor: 'primary.main', p: 2, borderRadius: '10px 10px 0 0' }} >
				<Typography 
					variant="body1" 
					sx={{ color: '#fff', fontSize: '12px', mb: 1 }}
				>
					Cari Data
				</Typography>
				<InputBase
					sx={{ 
						bgcolor: '#fff',
						width: 270,
						px: 2,
						py: 0.3,
						borderRadius: '5px'
					}}
				/>
			</Box>
			<TableContainer>
				<Table>
					<TableHead >
						<TableRow  >
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '20px', pl: 2  }} >
								No.Order
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Vendor
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Tanggal Pesan
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
								Tanggal Jatuh Tempo
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Status
							</TableCell>
							<TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
								Total
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
									{e.num}
								</TableCell>
								<TableCell padding='none' sx={{ display: 'flex', flexDirection: 'column', ...tableDataStyle, fontWeight: '600', fontSize: '14px' }} >
									{e.name}
									<Typography color='greyFont.main' sx={{ fontSize: '12px' }} >
										{e.comp}
									</Typography>
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.order_date}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.order_date}
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									<TableStatus status={e.status} />
								</TableCell>
								<TableCell padding='none' sx={{ ...tableDataStyle, color: '#121215' }} >
									{e.total}
								</TableCell>
								<TableCell padding ='none'  >
									<Stack direction='row' justifyContent='space-between' columnGap={1} >
										<TableButton
											title='Lihat'
										/>
										<TableButton
											title='Hapus'
											type='delete'
										/>
									</Stack>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)

}

export default MenungguPembayaran