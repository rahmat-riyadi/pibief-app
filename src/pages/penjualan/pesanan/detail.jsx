import { 
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Divider
} from '@mui/material'
import React, { useState } from 'react'
import NotifDialog from '../../../components/NotifDialog'
import { useParams } from 'react-router-dom'
import PrintIcon from '../../../assets/icons/printer.svg'

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

const buttonProps = {
  disableElevation: true,
  fullWidth: true,
  variant: 'contained',
  color:'secondary'
}

const FirstRow = () => {
  return (
    <Grid container>
      <Grid item md={3}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300" }}
        >
          Vendor
          <Typography
            sx={{
              fontSize: "13px",
              color: "secondary.main",
              fontWeight: "600",
              mt: 1,
            }}
          >
            PT. Khinta Permai
          </Typography>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300", mx: 8 }}
        >
          Nomor Order
          <Typography sx={{ fontSize: "13px", fontWeight: "600", mt: 1 }}>
            P/01
          </Typography>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300", mx: 8 }}
        >
          Nomor Order
          <Typography sx={{ fontSize: "13px", fontWeight: "600", mt: 1 }}>
            P/01
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}

const ThirdRow = () => {
  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item md={3}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300" }}
        >
          Gudang
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              mt: 1,
            }}
          >
            Gudang Utama
          </Typography>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300", mx: 8 }}
        >
          Tag
          <Typography sx={{ fontSize: "13px", fontWeight: "600", mt: 1 }}>
            Cabang 1
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

const SecondRow = () => {
  return (
    <Grid container sx={{ mt: 2 }} >
      <Grid item md={3}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300" }}
        >
          Tanggal Pesan
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              mt: 1,
            }}
          >
            21-10-2020
          </Typography>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300", mx: 8 }}
        >
          Tanggal Jatuh Tempo
          <Typography sx={{ fontSize: "13px", fontWeight: "600", mt: 1 }}>
            17-11-2022
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}

const DetailPesananPenjualan = () => {

  const { status } = useParams()

  const [showDialog, setShowDialog] = useState(false)
  const [showCancelDialog, setShowCancelDialog] = useState(false)

  let tableData = [
		{
      produk: 'Termometer',
      kuantitas: 3,
      satuan: 'Pcs',
      diskon: '5%',
      harga: 'Rp. 120.000',
      pajak: 'PPN',
      total: 'Rp. 342.000',
		},
		{
			produk: 'Masker',
      kuantitas: 10,
      satuan: 'Box',
      diskon: '0%',
      harga: 'Rp. 30.000',
      pajak: 'PPN',
      total: 'Rp. 300.000',
		}
	]

  const handleClick = () => {

    setShowDialog(true)

    setTimeout(() => {
      setShowDialog(false)
    }, 2000)

  }

  return (
    <div>
      <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
        Detail Pesanan
      </Typography>
      <Box sx={{ border: "1px solid #EAEAEA" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <Box
            sx={{
              width: "fit-content",
              p: "6px 8px",
              bgcolor:
                status === "Verifikasi"
                  ? "rgba(80, 205, 137, 0.2)"
                  : "rgba(249, 161, 27, 0.2)",
              color: status === "Verifikasi" ? "#50CD89" : "#F9A11B",
              borderRadius: "3px",
              my: 2.5,
              ml: 2.5,
            }}
          >
            {
            status === 'Verifikasi'
            &&
            <Typography variant="body1" sx={{ fontSize: "12px" }}>
              {status}
            </Typography>
          }
          </Box>
          {
            status === 'Verifikasi'
            &&
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              startIcon={<img src={PrintIcon} alt='' />}
              sx={{
                textTransform: "capitalize",
                color: "#FFF",
                my: 2.5,
                mr: 2.5,
              }}
            >
              Cetak Faktur
            </Button>
          }
        </Stack>
        <Box sx={{ p: 2.5 }}>
          <FirstRow />
          <SecondRow />
          <ThirdRow />
          <TableContainer sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...tableHeadStyle }}>Produk</TableCell>
                  <TableCell sx={{ ...tableHeadStyle }}>Kuantitas</TableCell>
                  <TableCell sx={{ ...tableHeadStyle }}>Satuan</TableCell>
                  <TableCell sx={{ ...tableHeadStyle }}>Diskon</TableCell>
                  <TableCell sx={{ ...tableHeadStyle }}>Harga</TableCell>
                  <TableCell sx={{ ...tableHeadStyle }}>Pajak</TableCell>
                  <TableCell sx={{ ...tableHeadStyle }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((e, i) => (
                  <TableRow>
                    <TableCell sx={{ ...tableDataStyle }}>{e.produk}</TableCell>
                    <TableCell sx={{ ...tableDataStyle, width: "50px" }}>
                      {e.kuantitas}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle }}>{e.satuan}</TableCell>
                    <TableCell sx={{ ...tableDataStyle, width: "50px" }}>
                      {e.diskon}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle }}>{e.harga}</TableCell>
                    <TableCell sx={{ ...tableDataStyle }}>{e.pajak}</TableCell>
                    <TableCell sx={{ ...tableDataStyle }}>{e.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack alignItems="flex-end" direction="column" sx={{ mt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 600, pr: 2 }}
            >
              SubTotal
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  ml: 10,
                  display: "inline",
                }}
              >
                Rp. 350.000
              </Typography>
            </Typography>
            <Divider
              sx={{
                minWidth: "400px",
                width: "250px",
                bgcolor: "#EAEAEA",
                my: 2,
              }}
            />
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 600, pr: 2 }}
            >
              Total
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  ml: 10,
                  display: "inline",
                }}
              >
                Rp. 650.000 
              </Typography>
            </Typography>
            <Divider
              sx={{
                minWidth: "400px",
                width: "250px",
                bgcolor: "#EAEAEA",
                my: 2,
              }}
            />
            {
              status === 'Menunggu'
              &&
              <Box sx={{ minWidth: "400px", width: "250px", display: 'flex', columnGap: 1.5 }}>
                <Button
                  {...buttonProps}
                  sx={{ 
                    textTransform: "capitalize", 
                    color: "#FFF", 
                    bgcolor: '#C92B28',
                    '&:hover':{
                      bgcolor: '#C92B28'
                    }
                  }}
                  onClick={() => setShowCancelDialog(true)}
                >
                  Tolak
                </Button>
                <Button
                  {...buttonProps}
                  sx={{ 
                    textTransform: "capitalize", 
                    color: "#FFF", 
                    bgcolor: '#50CD89',
                    '&:hover':{
                      bgcolor: '#50CD89'
                    }
                  }}
                  onClick={() => handleClick()}
                >
                  Verifikasi
                </Button>
              </Box>
            }
          </Stack>
        </Box>
      </Box>
      <NotifDialog
        message='Data Anda Telah Diverifikasi'
        status='success'
        show={showDialog}
      />
      <NotifDialog
        message='Apakah anda yakin menolak pesanan'
        status='danger'
        show={showCancelDialog}
        onAcceptText="Ya, Batal"
				onCancelText='Lanjut'
				onAccept={() => setShowCancelDialog(false)} 
				onCancel={() => setShowCancelDialog(false)} 
      />
    </div>
  );
}

export default DetailPesananPenjualan