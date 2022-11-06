import { 
  ArrowDropDown,
  KeyboardDoubleArrowLeftOutlined, 
  PersonOutlineOutlined 
} from '@mui/icons-material'
import { 
  Avatar,
  Box, 
  ButtonBase, 
  IconButton, 
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListText = ({ text }) => {
  return(
    <Typography variant='body1' sx={{ fontSize: '14px', color: 'greyFont.main' }} >
      {text}
    </Typography>
  )
}

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState()

  const navigate = useNavigate()
  const open = Boolean(anchorEl)

  return (
    <Box sx={{ 
				width: '100%', 
				height: '64px', 
				bgcolor: '#fff', 
				px: 3, 
				display: 'flex', 
        justifyContent: 'space-between',
				boxSizing: 'border-box', 
				alignItems: 'center', 
				borderBottom: '1px solid #EAEAEA', 
				position: 'sticky ',
        boxShadow: 'inset 1px -1px 12px rgba(0, 0, 0, 0.05)',
			}} 
		>
      <IconButton onClick={() => navigate(-1)} >
        <KeyboardDoubleArrowLeftOutlined sx={{ width: '30px', height: '30px'}} />
      </IconButton>
      <ButtonBase
        disableRipple
        onClick={(e) => setAnchorEl(e.currentTarget) }
      >
        <Avatar 
          variant='square'
          sx={{ 
            ml: 2, 
            borderRadius: '5px', 
            bgcolor: '#EAEAEA'
          }} 
        >
          <PersonOutlineOutlined/>
        </Avatar>
        <ArrowDropDown sx={{ ml: 1 }} />
      </ButtonBase>
      <Popover
        sx={{ mt: 1 }}
        open={open}
        onClose={() => setAnchorEl()}
        anchorEl={anchorEl}
        anchorOrigin={{ 
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List sx={{ maxWidth: '223px' }} >
          <ListItem>
            <ListItemIcon>
              <Avatar 
                variant='square'
                sx={{ 
                  borderRadius: '5px', 
                  bgcolor: '#EAEAEA'
                }} 
              >
                <PersonOutlineOutlined/>
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Apt. Rahmat Riyadi Syam" />
          </ListItem>
        </List>
        <Divider/>
        <List sx={{ minWidth: '223px' }} >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText children={<ListText text="Akun" />} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText children={<ListText text="Bantuan" />} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText children={<ListText text="Notifikasi" />} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {
              localStorage.clear()
              window.location.reload()
            }} >
              <ListItemText children={<ListText text="Logout" />} />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </Box>
  )
}

export default Navbar