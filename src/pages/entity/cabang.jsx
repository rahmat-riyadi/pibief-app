import {
  Box,
  Button,
  Stack,
  Typography,
  TableContainer,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent
} from "@mui/material";
import { useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { changeStatus } from "../../reducer/notifDialogSlice";
import { useDispatch } from "react-redux";
import NotifDialog from "../../components/NotifDialog";

const tableHeadStyle = {
  border: "none",
  bgcolor: "#F1F3F5",
  fontSize: "12px",
  color: "greyFont.main",
  py: 1,
  width: "fit-content",
};

const tableDataStyle = {
  fontSize: 12,
  py: 2,
};

const SectionDivider = ({ title }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontWeight: 600,
        borderLeft: "3px solid",
        borderColor: "secondary.main",
        pl: 1.5,
        mb: 3,
        color: "greyFont.main",
      }}
    >
      {title}
    </Typography>
  );
};

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

const CabangEntity = () => {

  const dispatch = useDispatch()
	const navigate = useNavigate()

  const [openDrawer, setOpenDrawer] = useState(false)

  let tableData = [
    {
      cabang: "Rahmat Riyadi Syam",
      kabupaten: "Makassar",
      alamat: "Jl Persatuan Raya Mannanti",
      telepon: "09876123",
      email: "rahmatriyadi17110@gmail.com",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
        Cabang
      </Typography>
			<Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="body1" sx={{ fontWeight: "300", fontSize: 12 }}>
          Tampilkan 10 Cabang
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
          onClick={() => navigate("/entity/cabang/tambah")}
        >
          Tambah Cabang
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
                Nama Cabang
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
                Telepon
              </TableCell>
              <TableCell
                padding="none"
                sx={{ ...tableHeadStyle, width: "100px" }}
              >
                Email
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
                  {i + 1}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{
                    ...tableDataStyle,
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {e.cabang}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.kabupaten}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.alamat}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.telepon}
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.email}
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
                      onClick={() => setOpenDrawer(true)}
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
                      onClick={() => dispatch(changeStatus(true))}
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
      <Dialog
        open={openDrawer}
        PaperProps={{ sx: { width: "860px", maxWidth: "unset" } }}
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
            Detail Cabang
          </Typography>
          <IconButton onClick={ () => setOpenDrawer(false)} >
            <CloseRounded />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers >
          <SectionDivider title="Data Identitas" />
          <DialogRow
            label1="Nama Cabang"
            text1="PT. Mencari Cinta Sejati"
            label2="Email"
            text2="rahmatriyadi171102@gmail.com"
          />
          <DialogRow
            label1="No. Telepon"
            text1="087819582058"
            label2="No. Whatsapp"
            text2="087819582058"
          />
          <DialogRow label1="Tanggal Terbentuk" text1="17-11-2022" />
          <Box sx={{ my: 3 }} />
          <SectionDivider title="Data Alamat" />
          <DialogRow
            label1="Provinsi"
            text1="Sulawesi Selatan"
            label2="Kab/Kota"
            text2="Makassar"
          />
          <DialogRow
            label1="Kecamatan"
            text1="Sengkang"
            label2="Kelurahan"
            text2="Malise"
          />
          <DialogRow
            label1="Detail Alamat"
            text1="Jl. Amirullah"
            label2="Kode Pos"
            text2="97611"
          />
          <Button
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "#FFC329",
              color: "#FFF",
              textTransform: "capitalize",
              width: "120px",
              mt: 2.5,
            }}
          >
            Edit
          </Button>
        </DialogContent>
      </Dialog>
      <NotifDialog
        status={false}
        message="Apakah anda ingin menghapus data?"
        onAcceptText="Ya, hapus"
      />
    </Box>
  );
};

export default CabangEntity;
