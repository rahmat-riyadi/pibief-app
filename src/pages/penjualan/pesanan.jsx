import {
  Box,
  Button,
  Stack,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const PesananPenjualan = () => {
  const [tabValue, setTabValue] = useState(0);

  const navigate = useNavigate();

  let tableData = [
    {
      num: "P-01",
      name: "Rahmat Riyadi Syam",
      comp: "PT. Khinta Permai",
      order_date: "21-10-2022",
      status: "Verikasi",
      total: "Rp. 962.620",
    },
    {
      num: "P-01",
      name: "Nurhikma",
      comp: "PT. Khinta Permai",
      order_date: "21-10-2022",
      status: "Menunggu",
      total: "Rp. 962.620",
    },
  ];

  for (let i = 0; i < 5; i++) {
    tableData.push(tableData[i % 2]);
  }

  return (
    <Box>
      <Box sx={{ width: "fit-content", mt: 2 }}>
        <Tabs
          value={tabValue}
          onChange={(e, v) => setTabValue(v)}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab
            label="Online"
            value={0}
            sx={{
              p: 1,
              borderRadius: "10px 0 0 0px",
              fontWeight: "300",
              border: "1px solid",
              borderColor: "secondary.main",
              textTransform: "none",
              borderBottom: "none",
              color: "secondary.main",
              "&.Mui-selected": {
                bgcolor: "rgba(5,165,225,0.10)",
                color: "secondary.main",
              },
            }}
          />
          <Tab
            label="Offline"
            value={1}
            sx={{
              p: 1,
              borderRadius: "0 10px 0 0px",
              fontWeight: "300",
              border: "1px solid",
              textTransform: "none",
              borderColor: "secondary.main",
              borderLeft: "none",
              borderBottom: "none",
              color: "secondary.main",
              "&.Mui-selected": {
                color: "secondary.main",
                bgcolor: "rgba(5,165,225,0.10)",
              },
            }}
          />
        </Tabs>
      </Box>
      <Divider />
      <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
        Pesanan {tabValue === 0 ? "Online" : "Offline"}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="body1" sx={{ fontWeight: "300", fontSize: 12 }}>
          Tampilkan 10 Pesanan
        </Typography>
        {tabValue !== 0 && (
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            sx={{
              width: "fit-content",
              color: "#fff",
              textTransform: "capitalize",
            }}
            onClick={() => navigate("/penjualan/pesanan/tambah")}
          >
            Tambah Pesanan
          </Button>
        )}
      </Stack>
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
                Pelanggan
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Waktu Pesan
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
                  4.20 am
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
                  {e.total}
                </TableCell>
                <TableCell padding="none" sx={{ pr: 2 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Button
                      variant={
                        e.status === "Menunggu" ? "contained" : "outlined"
                      }
                      size="small"
                      disableElevation
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        p: "4px 8px",
                        color:
                          e.status === "Menunggu" ? "#fff" : "greyFont.main",
                        bgcolor:
                          e.status === "Menunggu"
                            ? "secondary.main"
                            : "transparent",
                      }}
                      onClick={() => navigate(`detail/${i}`)}
                    >
                      {e.status === "Menunggu" ? "Verifikasi" : "Lihat"}
                    </Button>
                    <Button
                      variant={
                        e.status === "Menunggu" ? "contained" : "outlined"
                      }
                      size="small"
                      disableElevation
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        p: "4px 8px !important",
                        color:
                          e.status === "Menunggu" ? "#fff" : "greyFont.main",
                        bgcolor:
                          e.status === "Menunggu" ? "#C92B28" : "transparent",
                      }}
                    >
                      {e.status === "Menunggu" ? "Tolak" : "Hapus"}
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PesananPenjualan;
