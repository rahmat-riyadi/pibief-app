import { 
    Box, Button, InputBase, Stack, Typography 
} from "@mui/material"
import BreadCrumbsNav from "../../../components/BreadCrumbs"

const inputBaseStyle = {
    bgcolor: '#F5F8FA',
    width: '100%',
    borderRadius: '5px',
    px: 2,
    py: 0.7
}

const SectionTitle = ({ title }) => {
    return(
        <Typography
            sx={{ 
                borderLeft: '3px solid #05A5E1',
                pl: 1.5,
                fontWeight: 600
            }}
        >
            {title}
        </Typography>
    )
}

const InputLabel = ({ label }) => {
    return(
        <Typography variant='body1' sx={{ fontSize: '14px', fontWeight: 300, mb: 1 }} >
            {label}
        </Typography>
    )
}

const TambahVendor = () => {
    return(
        <Box>
            <BreadCrumbsNav/>
			<Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}  >
				<Typography variant='h5' sx={{ my: 2, fontSize: 21, fontWeight: 600 }} >
					Tambah Vendor
				</Typography>
			</Stack>
            <SectionTitle title='Data Umum' />
            <Stack direction='row' mt={2} columnGap={4} >
                <Stack flex={1} >
                    <Box flex={1} mb={1.5}  >
                        <InputLabel label='Nama Perusahaan' />
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                    <Box flex={1} >
                        <InputLabel label='No. Telepon' />
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                </Stack>
                <Stack flex={1} >
                    <Box flex={1} >
                        <InputLabel label='Email'/>
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                </Stack>
            </Stack>
            <Box mt={3} />
            <SectionTitle title='Data Alamat' />
            <Stack direction='row' mt={2} columnGap={4} >
                <Stack flex={1} >
                    <Box flex={1} mb={1.5}  >
                        <InputLabel label='Provinsi' />
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                    <Box flex={1} >
                        <InputLabel label='Kelurahan' />
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                </Stack>
                <Stack flex={1} >
                    <Box flex={1} mb={1.5}  >
                        <InputLabel label='Kab/Kota' />
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                    <Box flex={1} >
                        <InputLabel label='Detail Alamat' />
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                </Stack>
                <Stack flex={1} >
                    <Box flex={1} >
                        <InputLabel label='Kecamatan'/>
                        <InputBase sx={inputBaseStyle} />
                    </Box>
                </Stack>
            </Stack>
            <Stack direction='row' justifyContent='flex-end' mt={4} columnGap={2} >
                <Button
                    variant='contained'
                    disableElevation
                    sx={{ 
                        textTransform: 'none',
                        bgcolor: 'rgba(5, 165, 225, 0.1)',
                        color: 'secondary.main',
                        width: '220px',
                        '&:hover':{
                            bgcolor: 'rgba(5, 165, 225, 0.1)'
                        }
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
        </Box>
    )
}

export default TambahVendor