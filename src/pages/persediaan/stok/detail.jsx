import { 
    Box, 
    Button, 
    InputBase, 
    Paper, 
    Stack, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Typography
} from "@mui/material"
import { useRef } from "react"
import BreadCrumbsNav from "../../../components/BreadCrumbs"

const fileInputBtnStyle = {
    mt: 1,
    py: .3,
    px: 1.2,
    minWidth: 'unset',
    minHeight: 'unset',
    width: 'fit-content',
    height: 'fit-content',
    fontSize: '14px',
    textTransform: 'none',
    fontWeight: '300'
}

const tableHeadStyle = {
	border: 'none', 
	bgcolor: '#F1F3F5', 
	fontSize: '12px', 
	color: 'greyFont.main',
	py: 1
}

const tableDataStyle = {
	fontSize: 12,
	py: 1
}

const DetailStok = () => {

    const fileInputRef = useRef()

    return(
        <Box >
            <BreadCrumbsNav/>
            <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
                Detail Produk
            </Typography>
            <Box sx={{ height: '60px', border: '1px solid #EAEAEA', borderBottom: 'none' }} />
            <Box sx={{ border: '1px solid #eaeaea', p: 1.5, py: 2, pb: 15 }} >
                <Stack direction='row' columnGap={15} >
                    <Stack>
                        <Typography variant='body1' sx={{ fontSize: '13px', fontWeight: '300', mb: .5 }} >
                            Vendor
                        </Typography>
                        <Typography variant='body1' sx={{ fontWeight: 600, color: 'secondary.main' }} >
                            PT. Khinta
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' sx={{ fontSize: '13px', fontWeight: '300', mb: .5 }} >
                            Apotker Pj
                        </Typography>
                        <Typography variant='body1' sx={{ fontWeight: 600 }} >
                            Rahmat Riyadi S.Farm
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' alignItems='center' columnGap={1.5} mt={3} mb={3} >
                    <Paper
                        elevation={0}
                        sx={{ 
                            width: '160px',
                            height: '160px',
                            border: '1px solid #EAEAEA',
                            borderRadius: '5px'
                        }}
                    />
                    <InputBase sx={{ display: 'none' }} type='file' />
                    <Button 
                        variant='outlined'
                        color='secondary'
                        sx={fileInputBtnStyle}
                        onClick={() => fileInputRef.current.children[0].click()}
                    >
                        Edit Gambar
                    </Button>
                </Stack>
                <TableContainer >
                    <Table>
                        <TableHead >
                            <TableRow  >
                                <TableCell padding='none' sx={{  ...tableHeadStyle, width: '20px', pl: 2  }} >
                                    Nama Produk
                                </TableCell>
                                <TableCell padding='none' sx={{  ...tableHeadStyle, width: '150px'  }} >
                                    Nomor Bets
                                </TableCell>
                                <TableCell padding='none' sx={{  ...tableHeadStyle, width: '100px'  }} >
                                    Satuan
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow hover >
                                <TableCell padding='none'  sx={{ ...tableDataStyle, pl: 2, color: '#121215' }} >
                                    Paracetamol
                                </TableCell>
                                <TableCell padding='none'  sx={{ ...tableDataStyle, color: '#121215' }} >
                                    0001711102
                                </TableCell>
                                <TableCell padding='none'  sx={{ ...tableDataStyle, color: '#121215' }} >
                                    Straps
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default DetailStok