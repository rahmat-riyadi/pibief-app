import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import BreadCrumbsNav from '../../components/BreadCrumbs'

const IndexPembelian = () => {
  return (
    <Box>
        <BreadCrumbsNav/>
        <Outlet/>
    </Box>
  )
}

export default IndexPembelian