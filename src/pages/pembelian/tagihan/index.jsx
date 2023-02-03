import {
  Box,
  Stack,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
} from "@mui/material";
import BreadCrumbsNav from "../../../components/BreadCrumbs";
import { useNavigate } from "react-router-dom";
import NotifDialog from "../../../components/NotifDialog";
import { FilterBox } from "../../../components/FilterBox";
import { AddButton } from "../../../components/AddButton";
import { TableButton } from "../../../components/TableButton";
import { useState } from "react";

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
          status === "Lunas"
            ? "rgba(80, 205, 137, 0.2)"
            : "rgba(249, 161, 27, 0.2)",
        color: status === "Lunas" ? "#50CD89" : "#F9A11B",
        borderRadius: "3px",
      }}
    >
      <Typography variant="body1" sx={{ fontSize: "12px" }}>
        {status}
      </Typography>
    </Box>
  );
};

const Tagihan = () => {

  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();

  let tableData = [
    {
      num: "P-01",
      name: "Rahmat Riyadi Syam",
      comp: "PT. Khinta Permai",
      order_date: "21-10-2022",
      status: "Lunas",
      total: "Rp. 962.620",
      sisa: "Rp. 0",
    },
    {
      num: "P-01",
      name: "Nurhikma",
      comp: "PT. Khinta Permai",
      order_date: "21-10-2022",
      status: "Belum dibayar",
      total: "Rp. 962.620",
      sisa: "Rp. 1.000.000",
    },
  ];

  for (let i = 0; i < 5; i++) {
    tableData.push(tableData[i % 2]);
  }

  return (
    <Box>
      <BreadCrumbsNav />
      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}  >
				<Typography variant='h5' sx={{ my: 2, fontSize: 21, fontWeight: 600 }} >
					Tagihan
				</Typography>
				<AddButton
					title='Tambah Tagihan'
					onClick={ () => navigate('tambah') }
				/>
			</Stack>
      <FilterBox/>
      <TableContainer >
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
                Vendor
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Tanggal Pesan
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "150px" }}
              >
                Tanggal Jatuh Tempo
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Status
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Sisa Tagihan
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Total
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
              <TableRow key={i} hover>
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
                  {e.order_date}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.order_date}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  <TableStatus status={e.status} />
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.sisa}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.total}
                </TableCell>
                <TableCell padding="none" sx={{ pr: 2 }}>
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
  );
};

export default Tagihan;
