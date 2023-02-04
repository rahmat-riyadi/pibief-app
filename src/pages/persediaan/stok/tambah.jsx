import { AddRounded } from '@mui/icons-material'
import { 
    Box,
    Button,
    InputBase,
    Stack,
    Typography 
} from '@mui/material'
import { useState } from 'react'
import BreadCrumbsNav from '../../../components/BreadCrumbs'
import NotifDialog from '../../../components/NotifDialog'

const inputBaseStyle = {
    bgcolor: '#F5F8FA',
    width: '100%',
    borderRadius: '5px',
    px: 2,
    py: 0.7,
    ml: 1,
}

const InputLabel = ({label, first = false}) => {
    return(
        <Typography 
            variant='body1'
            sx={{ 
                fontSize: '14px', 
                fontWeight: 500, 
                color: '#656A7B',
                mb: 2,
                borderLeft: !first ? '1px solid #eaeaea' : '',
                pl: !first ? 1 : 0
            }} 
        >
            {label}
        </Typography>
    )
}

const TambahStok = () => {

    const [row, setRow] = useState(1)
    const [cancelModal, setCancelModal] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)

    return(
        <Box>
            <BreadCrumbsNav/>
            <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
                Tambah Produk
            </Typography>
            <Stack>
                {
                    [...Array(row)].map((e,i) => (
                        <Stack direction='row' mt={ i !== 0 ? 3 : 0} columnGap={2} sx={{ borderBottom: '1px solid #eaeaea', pb: 2 }} >
                        <Box flex={1} >
                            <InputLabel label='Produk' first={true} />
                            <InputBase sx={{ ...inputBaseStyle, ml: 0 }} />
                        </Box>
                        <Box flex={.5} >
                            <InputLabel label='Kuantitas' />
                            <InputBase type='number' sx={inputBaseStyle} />
                        </Box>
                        <Box flex={1} >
                            <InputLabel label='Satuan' />
                            <InputBase sx={inputBaseStyle} />
                        </Box>
                        <Box flex={1} >
                            <InputLabel label='Harga' />
                            <InputBase type='number' sx={inputBaseStyle} />
                        </Box>
                        <Box flex={1} >
                            <InputLabel label='Pajak' />
                            <InputBase type='number' sx={inputBaseStyle} />
                        </Box>
                        <Box flex={1.5} >
                            <InputLabel label='Total' />
                            <InputBase type='number' sx={inputBaseStyle} />
                        </Box>
                        </Stack>
                    ))
                }
                <Button  
                    variant='outlined' 
                    color='secondary'
                    sx={{ width: 'fit-content', mt: 2, textTransform: 'none', fontSize: '12px', py: 0.8 }}
                    startIcon={<AddRounded/>}
                    onClick={() => setRow(row+1)}
                >
                    Tambah Baris
                </Button>
                <Stack direction='row' justifyContent='flex-end' mt={10} columnGap={2} >
                    <Button
                        variant='contained'
                        disableElevation
                        sx={{ 
                            textTransform: 'none',
                            bgcolor: 'rgba(5, 165, 225, 0.1)',
                            color: 'secondary.main',
                            width: '220px'
                        }}
                        onClick={() => setCancelModal(true)}
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
                        onClick={() => {
                            setConfirmModal(true)
                            setInterval(() => {
                                setConfirmModal(false)
                            }, 2000)
                        }}
                    >
                        Tambah
                    </Button>
                </Stack>
            </Stack>
            <NotifDialog
                show={cancelModal}
                status='danger'
                message='Apakah anda yakin batalkan pesanan ?'
                onCancelText='Ya, Batal'
                onCancel={() => setCancelModal(false)}
                onAcceptText='Lanjut'
                onAccept={() => setCancelModal(false)}
            />
            <NotifDialog
                show={confirmModal}
                status='success'
                message='Data Berhasil Ditambah'
            />
        </Box>
    )
}

export default TambahStok