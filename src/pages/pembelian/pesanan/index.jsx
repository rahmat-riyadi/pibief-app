import { 
	Box, 
	Stack,
	TableContainer,
	Typography, 
} from '@mui/material'
import React, { useEffect } from 'react'
import BreadCrumbsNav from '../../../components/BreadCrumbs'
import { useNavigate } from 'react-router-dom'
import NotifDialog from '../../../components/NotifDialog'
import { FilterBox } from '../../../components/FilterBox'
import { AddButton } from '../../../components/AddButton'
import { useState } from 'react'
import { deletePurchase, getAllPurchase } from '../../../services/purchase'
import { TableButton } from '../../../components/TableButton'
import { useMemo } from 'react'
import dateFormatter from '../../../utils/dateFormatter'
import TextChip from '../../../components/textChip'
import TableSkeleton from '../../../components/tableSkeleton'
import BasicTable from '../../../components/Table'
import { useSortBy, useTable, useGlobalFilter } from 'react-table'
import rupiahFormatter from '../../../utils/rupiahFormatter'
import AlertNotif from '../../../components/Alert'

const Pesanan = () => {

	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [buttonLoading, setButtonLoading] = useState(false)

	const [purchaseData, setPurchaseData] = useState([])

	const [selectedData, setSelectedData] = useState('')

	const [alertOpt, setAlertOpt] = useState({
		visible: false,
		message: '',
		type: '',
	})

	const columns = useMemo(() => [
		{
			Header: 'No. Order',
			accessor: 'order_number',
			width: 200
		},
		{
			Header: 'Vendor',
			accessor: 'vendor',
		},
		{
			Header: 'Tanggal Pesan',
			accessor: 'order_date',
			Cell: ({ value }) => dateFormatter(value)
		},
		{
			Header: 'Tanggal Jatuh Tempo',
			accessor: 'due_date',
			Cell: ({ value }) => dateFormatter(value)
		},
		{
			Header: 'Status',
			accessor: 'status',
			Cell: ({ value }) => <TextChip text={value ? 'Verifikasi' : 'Menunggu'} status={value} />
		},
		{
			Header: 'Total',
			accessor: 'total_price',
			Cell: ({ value }) => rupiahFormatter(value)
		},
		{
			Header: 'Aksi',
			Cell: ({ row }) => 
			(<Stack direction='row' justifyContent='space-between' columnGap={1} >
				<TableButton
					title='Lihat'
					onClick={() => navigate('detail/' + row.original.order_number, { state: row.original })}
				/>
				<TableButton
					title='Hapus'
					type='delete'
					onClick={() => {
						setShowModal(true)
						setSelectedData(row.original.id)
					}}
				/>
			</Stack>)
		}
		// eslint-disable-next-line
	], [])

	useEffect(() =>{
		getData()
	},[])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter
  } = useTable({ columns, data: purchaseData}, useGlobalFilter, useSortBy)

	const { globalFilter } = state

	const getData = async () => {
		setLoading(true)
		const purchaseResponse = await getAllPurchase()
		setPurchaseData(purchaseResponse.data)
		setLoading(false)
	}

	const deleteData = async () => {

		setButtonLoading(true)

		await deletePurchase(selectedData)
		.then( res => {

			setButtonLoading(false)
			setShowModal(false)

			setAlertOpt({
				visible: true,
				message: res.message,
				type: res.status
			})

			const data = purchaseData.filter( e => e.id !== selectedData )

			setPurchaseData(data)

		})


	}

  return (
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
			<FilterBox filter={globalFilter} setFilter={setGlobalFilter} />
				<TableContainer sx={{ overflowX: 'auto', maxHeight: '70vh' }}>
					{
						loading
						?
						<TableSkeleton/>
						:
						<BasicTable 
							getTableProps={getTableProps}
							getTableBodyProps={getTableBodyProps}
							headerGroups={headerGroups}
							prepareRow={prepareRow}
							rows={rows}
						/>
					}
				</TableContainer>
			<NotifDialog
				show={showModal}
				loading={buttonLoading}
				message="Apakah anda ingin menghapus data?"
				status='warning'
				onAcceptText="Ya, hapus"
				onCancelText='Batal'
				onAccept={deleteData} 
				onCancel={() => setShowModal(false)} 
			/>

			<AlertNotif
				visible={alertOpt.visible}
				message={alertOpt.message}
				type={alertOpt.type}
				onClose={ () => setAlertOpt({ ...alertOpt, visible: false }) }
			/>

    </Box>
  )
}

export default Pesanan