import { 
	Box, 
  IconButton, 
  Stack, 
  Typography, 
} from '@mui/material'

import BreadCrumbsNav from '../../../components/BreadCrumbs'

import WalletIcon from '../../../assets/icons/wallet.svg'
import { ArrowForwardIosRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const ItemCard = ({ onClick, text,  }) => {
  return(
    <Stack direction='row' sx={{ border: '1px solid #EAEAEA', py: 3, px: 2.1, borderRadius: '10px', flex: 1 }} >
      <img src={WalletIcon} width={50} alt="" srcset="" />
      <Stack justifyContent='space-between' ml={2} flex={1} >
        <Typography 
          variant='body1' 
          sx={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            mt: 0.5,
            '&:hover': {
              cursor: 'default'
            }
          }} 
        >
          Rp. 24,000,000
        </Typography>
        <Typography 
          variant='body1' 
          sx={{ fontSize: '12px', fontWeight: '300', '&:hover': { cursor: 'default' } }} >
          {text}
        </Typography>
      </Stack>
      <IconButton 
        sx={{ ml: 1, color: 'secondary.main' ,'&:hover': { bgcolor: 'transparent' } }} 
        onClick={onClick}
      >
        <ArrowForwardIosRounded sx={{ fontSize: 15 }} />
      </IconButton>
    </Stack>
  )
}

const Laporan = () => {

  const navigate = useNavigate()

  return (
    <Box>
			<BreadCrumbsNav/>
			<Typography variant='body1' sx={{ fontSize: '21px', fontWeight: '600', mt: 2 }} >
				Laporan Pembelian
			</Typography>
			<Stack justifyContent='space-between' columnGap={3} direction='row' mt={3} >
				<ItemCard
				text='Menunggu Pembayaran'
				onClick={() => navigate('menunggu-pembayaran')}
				/>   
				<ItemCard
				text='Jatuh Tempo'
        onClick={() => navigate('jatuh-tempo')}
				/>   
				<ItemCard/>   
			</Stack>
		</Box>
  )
}

export default Laporan