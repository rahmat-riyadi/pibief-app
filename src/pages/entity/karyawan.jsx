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
} from "@mui/material";
import React from "react";
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

const TableStatus = ({ status }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        p: "6px 8px",
        bgcolor:
          status === "Selesai"
            ? "rgba(80, 205, 137, 0.2)"
            : "rgba(249, 161, 27, 0.2)",
        color: status === "Selesai" ? "#50CD89" : "#F9A11B",
        borderRadius: "3px",
      }}
    >
      <Typography variant="body1" sx={{ fontSize: "12px" }}>
        {status}
      </Typography>
    </Box>
  );
};

const KarywanEntity = () => {
  const navigate = useNavigate();

  let tableData = [
    {
      name: "Rahmat Riyadi Syam",
      email: "PT. Khinta Permai",
      address: "Jl Persatuan Raya Mannanti",
      phone: "09876123",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
        Karyawan
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="body1" sx={{ fontWeight: "300", fontSize: 12 }}>
          Tampilkan 10 Karyawan
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
          onClick={() => navigate("/pembelian/pesanan/tambah")}
        >
          Tambah Karyawan
        </Button>
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "20px", pl: 2 }}
              >
                No
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "150px" }}
              >
                Nama
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Email
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "150px" }}
              >
                Alamat
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Telepon
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
                  {i+1}
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
                <Typography/>
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.email}
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
                  {e.phone}
                </TableCell>
                <TableCell padding="none" sx={{ pr: 2 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Button
                      color="greyFont"
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        p: "4px 8px",
                      }}
                      onClick={() => navigate(`/pembelian/pesanan/detail/${i}`)}
                    >
                      Lihat
                    </Button>
                    <Button
                      color="greyFont"
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        p: "4px 8px",
                      }}
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
    </Box>
  );
};

export default KarywanEntity;
