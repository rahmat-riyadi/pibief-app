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
} from "@mui/material"
import { AddButton } from "../../../components/AddButton"
import BreadCrumbsNav from "../../../components/BreadCrumbs"
import { FilterBox } from "../../../components/FilterBox"
import { TableButton } from "../../../components/TableButton";

const tableHeadStyle = {
  border: "none",
  bgcolor: "#F1F3F5",
  fontSize: "12px",
  color: "greyFont.main",
  py: 1,
};

const tableDataStyle = {
  fontSize: 12,
  py: 2,
};

const TableStatus = ({ status }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        p: "6px 8px",
        bgcolor:
          status === "Dikemas"
            ? "rgba(201, 43, 40, 0.2)"
            : (status === 'Dikirim')
							? "rgba(249, 161, 27, 0.2)"
							: 'rgba(51, 160, 43, 0.2)',
        color:
          status === "Dikemas"
            ? "#C92B28"
            : (status === 'Dikirim')
							? "#F9A11B"
							: '#33A02B',
        borderRadius: "3px",
      }}
    >
      <Typography variant="body1" sx={{ fontSize: "12px" }}>
        {status}
      </Typography>
    </Box>
  );
};


const PengirimanPenjualan = () => {

	let tableData = [
    {
      num: "P-01",
      name: "Rahmat",
      comp: "PT. Khinta Permai",
      regency: 'Sinjai',
      address: 'Jln Amirullah No 13',
      orderDate: '17-11-2023',
			phone: '087819582058',
			status: 'Dikemas'
    },
    {
      num: "P-01",
      name: "Riyadi",
      comp: "PT. Khinta Permai",
      regency: 'Sinjai',
      address: 'Jln Amirullah No 13',
      orderDate: '17-11-2023',
			phone: '087819582058',
			status: 'Dikirim'
    },
    {
      num: "P-01",
      name: "Syam",
      comp: "PT. Khinta Permai",
      regency: 'Sinjai',
      address: 'Jln Amirullah No 13',
      orderDate: '17-11-2023',
			phone: '087819582058',
			status: 'Selesai'
    },
  ];

  for (let i = 0; i < 5; i++) {
    tableData.push(tableData[i % 3]);
  }

	return(
		<Box>
			<BreadCrumbsNav />
				<Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}  >
				<Typography variant='h5' sx={{ my: 2, fontSize: 21, fontWeight: 600 }} >
					Pengiriman
				</Typography>
				<AddButton
					title='Tambah Tagihan'
					onClick={ () => {} }
				/>
			</Stack>
			<FilterBox/>
			<TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "20px", pl: 2 }}
              >
                No.Order
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "150px" }}
              >
                Apotek
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Kabupaten
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Alamat
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "150px" }}
              >
                Tanggal Pesan
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                No. Telepon
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Status
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px", pr: 2 }}
              >
                Aksi
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((e, i) => (
              <TableRow id={i} hover>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, pl: 2, color: "#121215" }}
                >
                  {e.num}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ...tableDataStyle,
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {e.name}
                  <Typography color="greyFont.main" sx={{ fontSize: "12px" }}>
                    {e.comp}
                  </Typography>
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
									{e.regency}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.address}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.orderDate}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.phone}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
									<TableStatus status={e.status} />
                </TableCell>
                <TableCell padding="none" sx={{ pr: 2 }}>
                  <Stack direction='row' justifyContent='space-between' columnGap={1} >
										<TableButton
											title='Lihat'
											onClick={() => {}}
										/>
										<TableButton
											title='Hapus'
											type='delete'
											onClick={() => {}}
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

export default PengirimanPenjualan