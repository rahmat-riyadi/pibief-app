import { 
  ExpandMore, 
  KeyboardArrowRightOutlined, 
} from '@mui/icons-material'
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
import { useNavigate } from 'react-router-dom'
import logo from '../assets/image/logo.svg'

import Dashbaord from '../assets/icons/dashboard.svg'
import DashbaordActive from '../assets/icons/dashboard-active.svg'
import Shopping from '../assets/icons/shopping.svg'
import ShoppingActive from '../assets/icons/shopping-active.svg'
import Discount from '../assets/icons/discount.svg'
import SelectedDiscount from '../assets/icons/discount-active.svg'
import Stock from '../assets/icons/stock.svg'
import SelectedStock from '../assets/icons/stock-active.svg'
import Folder from '../assets/icons/folder.svg'
import SelectedFolder from '../assets/icons/folder-active.svg'
import SelectedBox from '../assets/icons/selected-box.svg'
import UnselectedBox from '../assets/icons/box.svg'

const baseListItemStyle = { 
  py: '12px', 
  borderRadius: '8px',
  '&:hover' : {
    cursor: 'pointer'
  }
}

const ListButton = ({ icon, itemText, status, onClick, isDashboard = false }) => {

  return(
    <ListItem onClick={onClick} sx={{ 
      ...baseListItemStyle, 
      background: (isDashboard && status) ? 'linear-gradient(90deg, #012257 0%, #05A5E1 119.22%)' : '', 
    }} >
      <ListItemIcon sx={{ minWidth: 'unset', mr: 1 }} >
        {icon}
      </ListItemIcon>
        <Typography 
        variant='body1' 
        sx={{ 
          fontSize: '14px', 
          flex: 1, 
          color: (isDashboard && status) ? '#fff' : status ? 'primary.main' : '#A6A8AE'
        }} 
      >
        {itemText}
      </Typography>
    </ListItem> 
  )
}

const ListButtonExpand = ({ icon, itemText, status, onClick  }) => {
  return(
    <ListItem 
      sx={{ 
        ...baseListItemStyle, 
        background: status ? 'linear-gradient(90deg, #012257 0%, #05A5E1 119.22%)' : 'primary.main' , 
      }}
      onClick={onClick}
    >
      <ListItemIcon sx={{ minWidth: 'unset', mr: 1 }} >
        {icon}
      </ListItemIcon>
      <Typography 
        variant='body1' 
        sx={{ 
          fontSize: '14px', 
          flex: 1, 
          color: status ? '#fff' : 'primary.main'
        }} 
      >
        {itemText}
      </Typography>
      { status ? <ExpandMore/> : <KeyboardArrowRightOutlined/> }
    </ListItem>
  )
}


const Sidebar = () => {

  const [showPembelian, setShowPembelian] = useState(false)
  const [showPenjualan, setShowPenjualan] = useState(false)
  const [showEntity, setShowEntity] = useState(false)
  const [showStok, setShowStok] = useState(false)
  // eslint-disable-next-line
  const [expand, setExpand] = useState(false)

  const url = window.location.pathname.split('/')

  const navigate = useNavigate()

  return (
    <Box sx={{
      width: !expand ? '270px' : '100px',
      height: '100%',
      boxShadow: '1px 1px 12px rgba(0, 0, 0, 0.05)',
      transition: '1s easy',
      overflowY: 'auto',
      position: 'relative',
    }} >
      <Box sx={{ 
          position: 'fixed', 
          zIndex: 1,
          py: 3, 
          width: '270px', 
          display: 'flex',
          bgcolor: '#fff'
        }} 
      >
        <img src={logo} alt="logo" width='130' style={{ margin: 'auto' }} />
      </Box>
      <Stack 
        direction='column' 
        alignItems='center' 
        sx={{ 
          boxSizing: 'border-box', 
          py: 3, 
          px: 2, 
          position: 'relative', 
      }} 
      >
        <List sx={{ width: '100%', mt: 10 }} 
        >
          <ListButton 
            isDashboard={true}
            itemText="Dashboard"
            icon={ <img src={ url.length === 2 ? DashbaordActive : Dashbaord } alt="" /> } 
            status={ url.length === 2 }
            onClick={ () => navigate('/dashboard')}
          />
          <ListButtonExpand 
            itemText="Pembelian"
            icon={ <img src={ url.includes('pembelian') ? ShoppingActive : Shopping } alt="" /> }
            status={ url.includes('pembelian') }
            onClick={() => setShowPembelian(!showPembelian)}
          />
          <Collapse in={showPembelian || url.includes('pembelian')} sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText="Laporan" 
                icon={<img src={ url.includes('laporan') && url.includes('pembelian') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('laporan') && url.includes('pembelian') }
                onClick={ () => navigate('/pembelian/laporan')}
              />
              <ListButton 
                itemText="Pesanan" 
                icon={<img src={ url.includes('pembelian') && url.includes('pesanan') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('pembelian') && url.includes('pesanan') }
                onClick={ () => navigate('/pembelian/pesanan')}
              />
              <ListButton 
                itemText="Tagihan"
                icon={<img src={ url.includes('pembelian') && url.includes('tagihan') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('pembelian') && url.includes('tagihan') }
                onClick={ () => navigate('/pembelian/tagihan')}
              />
            </List>
          </Collapse>
          <ListButtonExpand 
            itemText="Penjualan"
            icon={<img src={ url.includes('penjualan') ? SelectedDiscount : Discount } alt="" />} 
            status={url.includes('penjualan')}
            onClick={() => {
              setShowPenjualan(!showPenjualan)
              setShowPembelian(false)
            }}
          />
          <Collapse in={showPenjualan || url.includes('penjualan') } sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText="Laporan"
                icon={<img src={ url.includes('penjualan') && url.includes('laporan') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('penjualan') && url.includes('laporan') }
                onClick={ () => navigate('/penjualan/laporan')}
              />
              <ListButton 
                itemText="Pesanan"
                icon={<img src={ url.includes('penjualan') && url.includes('pesanan') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('penjualan') && url.includes('pesanan') }
                onClick={ () => navigate('/penjualan/pesanan')}
              />
              <ListButton 
                itemText="Tagihan"
                icon={<img src={ url.includes('penjualan') && url.includes('tagihan') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('penjualan') && url.includes('tagihan') }
                onClick={ () => navigate('/penjualan/tagihan')}
              />
              <ListButton 
                itemText="Pengiriman"
                icon={<img src={ url.includes('penjualan') && url.includes('pengiriman') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('penjualan') && url.includes('pengiriman') }
                onClick={ () => navigate('/penjualan/pengiriman') }
              />
              <ListButton 
                itemText="Penawaran"
                icon={<img src={ url.includes('penjualan') && url.includes('penawaran') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('penjualan') && url.includes('penawaran') }
                onClick={ () => {} }
              />
            </List>
          </Collapse>
          <ListButtonExpand 
            itemText="Persediaan"
            icon={<img src={ url.includes('persediaan') ? SelectedStock : Stock } alt="" />} 
            status={url.includes('persediaan')}
            onClick={() => setShowStok(!showStok)}
          />
          <Collapse in={showStok || url.includes('persediaan') } sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText="Entry Produk"
                icon={<img src={ url.includes('persediaan') && url.includes('entry-produk') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('persediaan') && url.includes('entry-produk') }
                onClick={ () => navigate('persediaan/entry-produk') }
              />
              <ListButton 
                itemText="Stok"
                icon={<img src={ url.includes('persediaan') && url.includes('stok') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('persediaan') && url.includes('stok') }
                onClick={ () => navigate('persediaan/stok') }
              />
              <ListButton 
                itemText="Return"
                icon={<img src={ url.includes('persediaan') && url.includes('return') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('persediaan') && url.includes('return') }
                onClick={ () => {} }
              />
            </List>
          </Collapse>
          <ListButtonExpand 
            itemText="Entity"
            icon={<img src={ url.includes('entity') ? SelectedFolder : Folder } alt="" />} 
            status={url.includes('entity')}
            onClick={() => setShowEntity(!showEntity)}
          />
          <Collapse in={showEntity} sx={{ pl: 6 }} >
            <List>
              <ListButton 
                itemText="Vendor"
                icon={<img src={ url.includes('entity') && url.includes('vendor') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('entity') && url.includes('vendor') }
                onClick={ () => navigate('entity/vendor')}
              />
              <ListButton 
                itemText="Cabang"
                icon={<img src={ url.includes('entity') && url.includes('cabang') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('entity') && url.includes('cabang') }
                onClick={ () => navigate('entity/cabang')}
              />
              <ListButton 
                itemText="Karyawan"
                icon={<img src={ url.includes('entity') && url.includes('karyawan') ? SelectedBox : UnselectedBox } alt="" />} 
                status={ url.includes('entity') && url.includes('karyawan') }
                onClick={ () => navigate('entity/karyawan')}
              />
            </List>
          </Collapse>
        </List>
      </Stack>
    </Box>
  )
}

export default Sidebar