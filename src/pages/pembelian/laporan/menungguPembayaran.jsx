import { 
	TableContainer,
	Box,
	Typography,
	Stack,
} from "@mui/material"
import { useEffect, useState } from "react"
import BreadCrumbsNav from "../../../components/BreadCrumbs"
import NotifDialog from "../../../components/NotifDialog"
import { TableButton } from "../../../components/TableButton"
import { deletePurchase, getWaitingPurchase } from "../../../services/purchase"
import { useGlobalFilter, useSortBy, useTable } from "react-table"
import { useMemo } from "react"
import dateFormatter from "../../../utils/dateFormatter"
import TextChip from "../../../components/textChip"
import { useNavigate } from "react-router-dom"
import rupiahFormatter from "../../../utils/rupiahFormatter"
import TableSkeleton from "../../../components/tableSkeleton"
import BasicTable from "../../../components/Table"
import { FilterBox } from "../../../components/FilterBox"
import AlertNotif from "../../../components/Alert"

const MenungguPembayaran = () => {

	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [buttonLoading, setButtonLoading] = useState(false)

	const [purchaseData, setPurchaseData] = useState([])

	const [selectedId, setSelectedId] = useState('')

	const [alertOpt, setAlertOpt] = useState({
		visible: false,
		message: '',
		type: '',
	})

	const getData = async () => {
		setLoading(true)
		const purchaseResponse = await getWaitingPurchase()
		setPurchaseData(purchaseResponse.data ?? [])
		setLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	const deleteData = async () => {

		setButtonLoading(true)

		await deletePurchase(selectedId)
		.then( res => {

			setButtonLoading(false)
			setShowModal(false)

			setAlertOpt({
				visible: true,
				message: res.message,
				type: res.status
			})

			const data = purchaseData.filter( e => e.id !== selectedId )

			setPurchaseData(data)

		})


	}

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
			accessor: 'payment_status',
			Cell: () => <TextChip text='Menunggu' status={false} />
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
						setSelectedId(row.original.id)
					}}
				/>
			</Stack>)
		}
		// eslint-disable-next-line
	], [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable({ data: purchaseData, columns }, useGlobalFilter, useSortBy)

	const { globalFilter } = state

	return (
		<Box>
			<BreadCrumbsNav/>
			<Typography variant='body1' sx={{ fontSize: '21px', fontWeight: '600', my: 2 }} >
				Menunggu Pembayaran
			</Typography>
			<FilterBox filter={globalFilter} setFilter={setGlobalFilter} />
			<TableContainer>
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

export default MenungguPembayaran