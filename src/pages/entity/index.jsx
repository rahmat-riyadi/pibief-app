import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import BreadCrumbsNav from '../../components/BreadCrumbs'

const IndexEntity = () => {
  return (
    <Box>
        <BreadCrumbsNav/>
        <Outlet/>
    </Box>
  )
}

export default IndexEntity