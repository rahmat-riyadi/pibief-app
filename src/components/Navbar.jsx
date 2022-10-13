import { KeyboardDoubleArrowLeftOutlined } from '@mui/icons-material'
import { 
  Avatar,
    Box, IconButton, Typography 
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <Box sx={{ 
				width: '100%', 
				height: '64px', 
				bgcolor: '#fff', 
				px: 3, 
				display: 'flex', 
				boxSizing: 'border-box', 
				alignItems: 'center', 
				borderBottom: '1px solid #EAEAEA', 
				position: 'sticky ',
			}} 
		>
        <IconButton onClick={() => navigate(-1)} >
					<KeyboardDoubleArrowLeftOutlined sx={{ width: '30px', height: '30px'}} />
        </IconButton>
        <Typography variant='body1' textAlign='right' sx={{ fontWeight: '300', fontSize: '14px', flex: 1, justifySelf: 'flex-end' }} >
          Apt. Ahmad baco' Dg Gassing
        </Typography>
        <IconButton
          disableRipple
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
        >
          <Avatar 
            variant='square'
            sx={{ 
              ml: 2, 
              borderRadius: '5px', 
              bgcolor: deepOrange[500] 
            }} 
          >
            R
          </Avatar>
        </IconButton>
    </Box>
  )
}

export default Navbar