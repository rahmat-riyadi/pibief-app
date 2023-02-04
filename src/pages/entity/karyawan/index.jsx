import { CloseRounded, KeyboardArrowDownRounded, SearchOutlined } from "@mui/icons-material";
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
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  InputBase,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotifDialog from "../../../components/NotifDialog";
import { TableButton } from "../../../components/TableButton";
import { AddButton } from "../../../components/AddButton";
import BreadCrumbsNav from "../../../components/BreadCrumbs";

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

const KaryawanEntity = () => {

  const navigate = useNavigate();

  const [showKaryawanModal, setShowKaryawanModal] = useState(false)
  const [deleteModal, setShowDeleteModal] = useState(false)

  let tableData = [
    {
      name: "Rahmat Riyadi Syam",
      email: "PT. Khinta Permai",
      address: "Jl Persatuan Raya Mannanti",
      phone: "09876123",
      jk: "Perempuan",
    },
  ];

  return (
    <Box>
      <BreadCrumbsNav/>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ mb: 2 }}
			>
        <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
					Cabang
				</Typography>
        <AddButton 
					title='Tambah Karyawan'
					onClick={() => navigate('tambah')}
				/>
			</Stack>
			<Stack alignItems='center' direction='row' mb={2} >
        <Typography variant='body1' sx={{ fontWeight: 300, color: 'greyFont.main', mr: 1 }} >
					Filter
				</Typography>
				<Button 
					variant='outlined' 
					color='secondary'
					endIcon={<KeyboardArrowDownRounded/>}
					size='small'
					sx={{ textTransform: 'none' }}
				>
					Semua
				</Button>
        <Box flex={1} />
				<InputBase 
					startAdornment={<SearchOutlined sx={{ mr: 1 }} />}
					sx={{ border: '1px solid #A6A8AE', py: .2, px: 1.5, borderRadius: '5px', width: '250px' }}
					placeholder='Cari Data'
				/>
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
                Jenis Kelamin
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
                  {i + 1}
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
                  <Typography />
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ ...tableDataStyle, color: "#121215" }}
                >
                  {e.jk}
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
                  <Stack direction='row' justifyContent='space-between' columnGap={1} >
										<TableButton
											title='Lihat'
											onClick={() => setShowKaryawanModal(true)}
										/>
										<TableButton
											title='Hapus'
											type='delete'
											onClick={() => setShowDeleteModal(true)}
										/>
									</Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={showKaryawanModal}
        scroll="paper"
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
            Detail Karyawan
          </Typography>
          <IconButton onClick={ () => setShowKaryawanModal(false)} >
            <CloseRounded />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ px: 5 }} >
          <SectionDivider title="Data Identitas" />
          <DialogRow
            label1="Nama Lengkap"
            text1="Rahmat Riyadi Syam"
            label2="Email"
            text2="rahmatriyadi171102@gmail.com"
          />
          <DialogRow
            label1="No. Telepon"
            text1="087819582058"
            label2="NIP"
            text2="1234-5678-0988"
          />
          <DialogRow
            label1="NIK"
            text1="123123333"
            label2="Jenis Kelamin"
            text2="Laki - Laki"
          />
          <DialogRow
            label1="Agama"
            text1="Islam"
            label2="Status"
            text2="Jomblo"
          />
          <DialogRow
            label1="Tempat Lahir"
            text1="Sinjai"
            label2="Tanggal Lahir"
            text2="17-11-2002"
          />
          <DialogRow
            label1="Suku"
            text1="Bugis"
            label2="Tinggi Badan"
            text2="163 cm"
          />
          <DialogRow
            label1="Berat Badan"
            text1="46 kg"
            label2="Total Saudara"
            text2="0"
          />
          <DialogRow
            label1="Golongan Darah"
            text1="Darah Biru"
            label2="No. BPJS"
            text2="00808-9779-232"
          />
          <DialogRow label1="Tanggal Join" text1="17-11-2022" />
          <Box sx={{ my: 3 }} />
          <SectionDivider title="Data Alamat" />
          <DialogRow
            label1="Provinsi"
            text1="Sulawesi Selatan"
            label2="Kab/Kota"
            text2="Kab Wajo"
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
          <SectionDivider title="Data Bank" />
          <DialogRow
            label1="No. Rekening"
            text1="7747-8723-1123"
            label2="Bank"
            text2="Bank Rakyat Indonesia (BRI)"
          />
          <DialogRow label1="Kode Bank" text1="002" />
          <Box sx={{ my: 3 }} />
          <SectionDivider title="Data Sosial Media" />
          <DialogRow
            label1="Facebook"
            text1="Rahmat Riyadi Syam"
            label2="Instagram"
            text2="rahmat_riyadi_syam"
          />
          <DialogRow
            label1="Linkedin"
            text1="rahmat_riyadi"
            label2="Twitter"
            text2="@rahmat_riyadi_syam"
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
				show={deleteModal}
				message="Apakah anda ingin menghapus data?"
				status='warning'
				onAcceptText="Ya, hapus"
				onCancelText='Batal'
				onAccept={() => setShowDeleteModal(false)} 
				onCancel={() => setShowDeleteModal(false)} 
			/>
    </Box>
  );
};

export default KaryawanEntity;