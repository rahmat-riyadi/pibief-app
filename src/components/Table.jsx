import { TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material'
import React from 'react'

const tableHeadStyle = {
	border: 'none', 
	bgcolor: '#F1F3F5', 
	fontSize: '12px', 
	color: 'greyFont.main',
	py: 1
}

const tableDataStyle = {
	fontSize: 12,
	py: 2
}

const BasicTable = ({ headerGroups, getTableProps, getTableBodyProps, rows, prepareRow  }) => {

  return (
    <Table sx={{ width: 'max-content', minWidth: '100%' }}  {...getTableProps()} >
      <TableHead >
        {
          headerGroups.map( headerGroup => (
            <TableRow sx={{ bgcolor: '#F1F3F5' }} {...headerGroup.getHeaderGroupProps()} >
              {
                headerGroup.headers.map( col => (
                  <TableCell sx={{ ...tableHeadStyle }} {...col.getHeaderProps(col.getSortByToggleProps())} >
                    {col.render('Header')}
                  </TableCell>
                ))
              }
            </TableRow>
          ))
        }
      </TableHead>
      <TableBody {...getTableBodyProps()} >
        {
          rows.map( row => {
            prepareRow(row)
            return (
              <TableRow sx={{ ...tableDataStyle }} {...row.getRowProps()} >
                {
                  row.cells.map( cell => (
                    <TableCell {...cell.getCellProps()} >
                      {cell.render('Cell')}
                    </TableCell>
                  ))
                }
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default BasicTable