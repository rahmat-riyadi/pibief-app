import { 
  Box,
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
} from '@mui/material'
import React from 'react'
import BreadCrumbsNav from '../../../components/BreadCrumbs'
import NotifDialog from '../../../components/NotifDialog'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../../reducer/notifDialogSlice'
import DetailVendorDialog from '../../../components/DetailVendorDialog'
import { PrintButton } from '../../../components/PrintButton'
import ReturnSvg from '../../../assets/icons/return.svg'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import rupiahFormatter from '../../../utils/rupiahFormatter'

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

const ModalRow = props => {

  const titleStyle = { fontSize: "16px", fontWeight: "500", flex: 1 }
  const textStyle = { fontSize: "13px", color: '#121215', fontWeight: "300", mt: 0.5 }

  return(
   <Stack direction='row' mb={2} >
      <Typography variant="body1" sx={titleStyle} >
        {props.title1}
        <Typography sx={textStyle} >
          {props.text1}
        </Typography>
      </Typography>
      <Typography variant="body1" sx={titleStyle} >
        {props.title2}
        <Typography sx={textStyle} >
          {props.text2}
        </Typography>
      </Typography>
   </Stack> 
  )

}

const FirstRow = (props) => {
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
              '&:hover': {
                cursor: 'pointer'
              }
            }}
          >
            <span onClick={props.onClick} >
              {props.vendor}
            </span>
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
            {props.orderNumber}
          </Typography>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300", mx: 8 }}
        >
          Apoteker PJ
          <Typography sx={{ fontSize: "13px", fontWeight: "600", mt: 1 }}>
            {props.responsiblePerson}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}

const ThirdRow = (props) => {
  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item md={3}>
      <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300" }}
        >
          Cabang
          <Typography sx={{ fontSize: "13px", fontWeight: "600", mt: 1 }}>
            {props.branch}
          </Typography>
        </Typography>
      </Grid>
      <Grid item md={4}>
       
      </Grid>
    </Grid>
  );
};

const SecondRow = (props) => {
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
            {props.orderDate}
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
          {props.dueDate}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}

const DetailPesanan = ({status  = 'Selesai'}) => {

  const dispatch = useDispatch()
  const location = useLocation()

  const data = location.state

  const [showVendorModal, setShowVendorModal] = useState(false)

  const handleClick = () => {

    dispatch(changeStatus(true))

    setTimeout(() => {
      dispatch(changeStatus(false))
    }, 2000)

  }

  return (
    <Box>
      <BreadCrumbsNav/>
      <Typography variant='h5' sx={{ my: 2, fontSize: 21, fontWeight: 600 }} >
				Detail Pesanan
			</Typography>
      <Box sx={{ border: '1px solid #EAEAEA' }} >
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ borderBottom: '1px solid #EAEAEA' }} >
          <Box 
            sx={{
              width: 'fit-content', 
              p: '6px 8px', 
              bgcolor: data.status ? 'rgba(80, 205, 137, 0.2)' : 'rgba(249, 161, 27, 0.2)',
              color: data.status ? '#50CD89' : '#F9A11B',
              borderRadius: '3px',
              my: 2.5,
              ml: 2.5
            }} 
        >
            <Typography variant='body1' sx={{ fontSize: '12px' }} >
              {data.status ? 'Verifikasi' : 'Menunggu'}
            </Typography>
          </Box>
          <Box flex={1} />
          {

            data.status
            ?
            <Button 
              variant='contained' 
              disableElevation
              startIcon={ <img src={ReturnSvg} alt="icn" /> } 
              sx={{ 
                textTransform: 'capitalize', 
                color: '#FFF', 
                my: 2.5, 
                mr: 2.5 ,
                bgcolor: '#F9A11B',
                px: 3
              }} 
              >
              Return
          </Button>
          :
          null
          }
          <PrintButton disable={data.status ? false : true} />
        </Stack> 
        <Box sx={{ p: 2.5 }} >
          <FirstRow responsiblePerson={data.responsible_person} orderNumber={data.order_number} vendor={data.vendor} onClick={() => setShowVendorModal(true)} />
          <SecondRow orderDate={data.order_date} dueDate={data.due_date} />
          <ThirdRow branch={data.branch} />
          <TableContainer sx={{ mt: 3 }} >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...tableHeadStyle }} >
                    Produk
                  </TableCell>
                  <TableCell sx={{ ...tableHeadStyle }} >
                    Kuantitas
                  </TableCell>
                  <TableCell sx={{ ...tableHeadStyle }} >
                    Satuan
                  </TableCell>
                  <TableCell sx={{ ...tableHeadStyle }} >
                    Diskon
                  </TableCell>
                  <TableCell sx={{ ...tableHeadStyle }} >
                    Harga
                  </TableCell>
                  <TableCell sx={{ ...tableHeadStyle }} >
                    Pajak
                  </TableCell>
                  <TableCell sx={{ ...tableHeadStyle }} >
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.purchase_product.map((e,i) => (
                  <TableRow>
                    <TableCell sx={{ ...tableDataStyle }} >
                      {e.product_name}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle, width: '50px' }} >
                      {e.quantity}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle }} >
                      {e.unit}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle, width: '50px' }} >
                      {e?.discount}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle }} >
                    {rupiahFormatter(e.price)}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle }} >
                      {e.taxes}
                    </TableCell>
                    <TableCell sx={{ ...tableDataStyle }} >
                      {rupiahFormatter(e.total_price)}
                    </TableCell>
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
            <Box sx={{ minWidth: "400px", width: "250px" }}>
              <Button
                disableElevation
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ textTransform: "capitalize", color: "#FFF" }}
                onClick={handleClick}
              >
                Verifikasi
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      <NotifDialog
        message='Data Anda Telah Diverifikasi'
        status={true}
      />
      <DetailVendorDialog
        open={showVendorModal}
        onClose={ () => setShowVendorModal(false) }
        onClick={ () => setShowVendorModal(false) }
      >
        <ModalRow 
          title1='Nama Perusahaan'
          text1='PT. Khinta'
          title2='Email'
          text2='khinta@gmail.com'
        />
        <ModalRow 
          title1='No. Telepon'
          text1='087819582058'
        />
        <ModalRow 
          title1='Provinsi'
          text1='Sulawesi Selatan'
          title2='Kab/Kota'
          text2='Makassar'
        />
        <ModalRow 
          title1='Kecamatan'
          text1='Manggala'
          title2='Kelurahan'
          text2='Borong'
        />
        <ModalRow 
          title1='Detail Alamat'
          text1='Jln Kenangan No. 12'
        />
      </DetailVendorDialog>
    </Box>
  )
}

export default DetailPesanan