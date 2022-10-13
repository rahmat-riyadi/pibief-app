import { DashboardRounded, DiscountOutlined, ExpandMore, FileUploadOutlined, Inventory2Rounded, KeyboardArrowRightOutlined, LeaderboardOutlined, ShoppingCart } from '@mui/icons-material'
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onButtonClick } from '../reducer/sidebarSlice'
import logo from '../assets/image/logo.svg'

const baseListItemStyle = { 
  py: '12px', 
  borderRadius: '8px',
  '&:hover' : {
    cursor: 'pointer'
  }
}

const ItemText = ({ status, label }) => {
  return(
    <Typography 
      variant='body1' 
      sx={{ 
        fontSize: '14px', 
        flex: 1, 
        color: (status === 'selected') ? '#fff' : '#000'
      }} 
    >
      {label}
    </Typography>
  )
}

const ListButton = ({ icon, itemText, status, onClick }) => {
  return(
    <ListItem onClick={onClick} sx={{ 
      ...baseListItemStyle, 
      bgcolor: (status === 'selected') ? 'primary.main' : 'transparent' , 
      color: '#fff'
    }} >
      <ListItemIcon sx={{ minWidth: 'unset', mr: 2 }} >
        {icon}
      </ListItemIcon>
      {itemText}
    </ListItem>
  )
}

const ListButtonExpand = ({ icon, itemText, status, onClick  }) => {
  return(
    <ListItem 
      sx={{ 
        ...baseListItemStyle, 
        bgcolor: 'transparent' , 
      }}
      onClick={onClick}
    >
      <ListItemIcon sx={{ minWidth: 'unset', mr: 2 }} >
        {icon}
      </ListItemIcon>
      {itemText}
      { status ? <ExpandMore/> : <KeyboardArrowRightOutlined/> }
    </ListItem>
  )
}

const Sidebar = () => {

  const [showPembelian, setShowPembelian] = useState(false)
  const [showPenjualan, setShowPenjualan] = useState(false)
  const [showStok, setShowStok] = useState(false)
  const [showExport, setShowExport] = useState(false)

  const dispatch = useDispatch()
  const { currentIndex, location } = useSelector( state => state.sidebarReducer )

  const isSelected = (loc, index) => (location === loc && currentIndex === index) ? 'selected' : 'unselected' 

  const navigate = useNavigate()

  return (
    <Box sx={{
      width: '300px',
      height: '100%',
      boxShadow: '1px 1px 12px rgba(0, 0, 0, 0.05)',
      mr: 1
    }} >
      <Stack direction='column' alignItems='center' sx={{ boxSizing: 'border-box', py: 3, px: 2 }} >
        <img src={logo} alt="logo" width='130' />
        <List sx={{ width: '100%', mt: 3 }} >
          <ListButton 
            itemText={ <ItemText label='Dashboard' status={ isSelected('dashboard', 0) } /> } 
            icon={<DashboardRounded sx={{ color: (isSelected('dashboard', 0) === 'selected') ? '#fff' : '' }} />} 
            status={ isSelected('dashboard', 0) }
            onClick={ () => dispatch(onButtonClick({ location: 'dashboard', index: 0 })) }
          />
          <ListButtonExpand 
            itemText={ <ItemText label='Pembelian' /> } 
            icon={<ShoppingCart/>}
            status={showPembelian}
            onClick={() => setShowPembelian(!showPembelian)}
          />
          <Collapse in={showPembelian} sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText={ <ItemText label='Laporan' status={ isSelected('laporan', 1) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('laporan', 1) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('laporan', 1) }
                onClick={ () => {
                  dispatch(onButtonClick({ location: 'laporan', index: 1 }))
                  navigate('/pembelian/laporan')
                }}
              />
              <ListButton 
                itemText={ <ItemText label='Pesanan' status={ isSelected('pesanan', 1) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('pesanan', 1) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('pesanan', 1) }
                onClick={ () => {
                  dispatch(onButtonClick({ location: 'pesanan', index: 1 })) 
                  navigate('/pembelian/pesanan')
                }}
              />
              <ListButton 
                itemText={ <ItemText label='Tagihan' status={ isSelected('tagihan', 1) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('tagihan', 1) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('tagihan', 1) }
                onClick={ () => {
                  dispatch(onButtonClick({ location: 'tagihan', index: 1 }))
                  navigate('/pembelian/tagihan')
                }}
              />
            </List>
          </Collapse>
          <ListButtonExpand 
            itemText={ <ItemText label='Penjualan' /> } 
            icon={<DiscountOutlined/>}
            status={showPenjualan}
            onClick={() => setShowPenjualan(!showPenjualan)}
          />
          <Collapse in={showPenjualan} sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText={ <ItemText label='Pesanan Online' status={ isSelected('pesanan online', 2) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('pesanan online', 2) === 'selected') ? '#fff' : '' }}  />} 
                status={ isSelected('pesanan online', 2) }
                onClick={ () => {
                  dispatch(onButtonClick({ location: 'pesanan online', index: 2 }))

                }}
              />
              <ListButton 
                itemText={ <ItemText label='Pesanan Offline' status={ isSelected('pesanan offline', 2) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('pesanan offline', 2) === 'selected') ? '#fff' : '' }}  />} 
                status={ isSelected('pesanan offline', 2) }
                onClick={ () => dispatch(onButtonClick({ location: 'pesanan offline', index: 2 })) }
              />
              <ListButton 
                itemText={ <ItemText label='History Pesanan' status={ isSelected('history pesanan', 2) } /> } 
                icon={<Inventory2Rounded  sx={{ color: (isSelected('history pesanan', 2) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('history pesanan', 2) }
                onClick={ () => dispatch(onButtonClick({ location: 'history pesanan', index: 2 })) }
              />
            </List>
          </Collapse>
          <ListButtonExpand 
            itemText={ <ItemText label='Stok' /> } 
            icon={<LeaderboardOutlined/>}
            status={showStok}
            onClick={() => setShowStok(!showStok)}
          />
          <Collapse in={showStok} sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText={ <ItemText label='Obat' status={ isSelected('obat', 3) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('obat', 3) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('obat', 3) }
                onClick={ () => dispatch(onButtonClick({ location: 'obat', index: 3 })) }
              />
              <ListButton 
                itemText={ <ItemText label='Alat Kesehatan' status={ isSelected('alat kesehatan', 3) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('alat kesehatan', 3) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('alat kesehatan', 3) }
                onClick={ () => dispatch(onButtonClick({ location: 'alat kesehatan', index: 3 })) }
              />
            </List>
          </Collapse>
          <ListButtonExpand 
            itemText={ <ItemText label='Export' /> } 
            icon={<FileUploadOutlined/>}
            status={showExport}
            onClick={() => setShowExport(!showExport)}
          />
          <Collapse in={showExport} sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText={ <ItemText label='Obat' status={ isSelected('obat', 4) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('obat', 4) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('obat', 4) }
                onClick={ () => dispatch(onButtonClick({ location: 'obat', index: 4 })) }
              />
              <ListButton 
                itemText={ <ItemText label='Alat Kesehatan' status={ isSelected('alat kesehatan', 4) } /> } 
                icon={<Inventory2Rounded sx={{ color: (isSelected('alat kesehatan', 4) === 'selected') ? '#fff' : '' }} />} 
                status={ isSelected('alat kesehatan', 4) }
                onClick={ () => dispatch(onButtonClick({ location: 'alat kesehatan', index: 4 })) }
              />
            </List>
          </Collapse>
        </List>
      </Stack>
    </Box>
  )
}

export default Sidebar