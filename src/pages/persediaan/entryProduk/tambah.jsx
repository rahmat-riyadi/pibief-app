import { 
    Box, 
    Button, 
    InputBase, 
    Stack, 
    Typography
} from "@mui/material"
import { useRef } from "react"
import BreadCrumbsNav from "../../../components/BreadCrumbs"
import NotifDialog from "../../../components/NotifDialog"

const fileInputStyle = {
    display: 'flex',
    border: '1px dashed #EAEAEF',
    borderRadius: 1,
    width: '150px',
    height: '150px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const fileInputBtnStyle = {
    mt: 1,
    py: .3,
    px: 1.2,
    minWidth: 'unset',
    minHeight: 'unset',
    width: 'fit-content',
    height: 'fit-content',
    fontSize: '12px',
    textTransform: 'none',
    fontWeight: '300'
}

const inputBaseStyle = {
    bgcolor: '#F5F8FA',
    width: '100%',
    borderRadius: '5px',
    px: 2,
    py: 0.7
}

const InputLabel = ({ label }) => {
    return(
        <Typography variant='body1' sx={{ fontSize: '14px', fontWeight: 300, mb: 1 }} >
            {label}
        </Typography>
    )
}

const TambahEntryProduk = () => {

    const fileInputRef = useRef()
    
    return(
        <Box pb={5} >
            <BreadCrumbsNav/>
			<Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}  >
				<Typography variant='h5' sx={{ my: 2, fontSize: 21, fontWeight: 600 }} >
					Tambah Produk
				</Typography>
			</Stack>
            <Box sx={fileInputStyle} >
                <Typography 
                    variant='body1' 
                    sx={{ fontWeight: 600, fontSize: '12px', m: 0, color: '#A6A8AE' }} 
                >
                    Gambar Produk
                </Typography>
                <InputBase ref={fileInputRef} type="file" sx={{ display: 'none' }} />
                <Button 
                    variant='outlined'
                    color='secondary'
                    sx={fileInputBtnStyle}
                    onClick={() => fileInputRef.current.children[0].click()}
                >
                    Pilih File
                </Button>
            </Box>
            <Stack direction='row' mt={2} columnGap={4} >
                <Box flex={1}  >
                    <InputLabel label='Vendor' />
                    <InputBase sx={inputBaseStyle} />
                </Box>
                <Box flex={1} >
                    <InputLabel label='Penanggung Jawab Apotek' />
                    <InputBase sx={inputBaseStyle} />
                </Box>
            </Stack>
            <Stack direction='row' mt={2} columnGap={4} >
                <Box flex={1}  >
                    <InputLabel label='Nama Produk' />
                    <InputBase sx={inputBaseStyle} />
                </Box>
                <Box flex={1} >
                    <InputLabel label='Nomor Bets' />
                    <InputBase sx={inputBaseStyle} />
                </Box>
                <Box flex={1} >
                    <InputLabel label='Satuan' />
                    <InputBase sx={inputBaseStyle} />
                </Box>
            </Stack>
            <Stack direction='row' justifyContent='flex-end' mt={4} columnGap={2} >
                <Button
                    variant='contained'
                    disableElevation
                    sx={{ 
                        textTransform: 'none',
                        bgcolor: 'rgba(5, 165, 225, 0.1)',
                        color: 'secondary.main',
                        width: '220px'
                    }}
                >
                    Batal
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    disableElevation
                    sx={{ 
                        textTransform: 'none',
                        width: '220px',
                        color: '#fff'
                    }}
                >
                    Tambah
                </Button>
            </Stack>
            <NotifDialog

            />
        </Box>
    )
}

export default TambahEntryProduk