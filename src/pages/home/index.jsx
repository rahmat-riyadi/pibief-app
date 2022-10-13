import { 
  Stack,
  Box,
  Typography,
  Button
} from '@mui/material'
import img from '../../assets/image/illustration.svg'

const Index = () => {
  return (
   <Stack>
      <Box sx={{ bgcolor: '#fff', display: 'flex', p: 3 }} >
        <img src={img} alt="" width='200' />
        <Stack direction='column' sx={{ ml: 5, height: 'inherit' }} >
          <Typography variant='h4' >
            Halo Rahmat
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '12px', fontWeight: '300', mt: 2, width: '350px' }} >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, illum accusamus aperiam asperiores hic recusandae consequatur, unde repellat doloremque, est eos aut reiciendis odit vero?
          </Typography>
          <Button 
            variant='contained' 
            fullWidth={false} 
            size='small'
            sx={{
              mt: 3, 
              width: 'fit-content', 
              fontWeight: '400', 
              fontSize: '14px', 
              textTransform: 'capitalize' ,
              color: '#fff'
            }} >
            Lengkapi Sekarang
          </Button>
        </Stack>
      </Box>
   </Stack>
  )
}

export default Index