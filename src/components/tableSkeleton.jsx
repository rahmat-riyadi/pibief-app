import { Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

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

const TableSkeleton = () => {

 return(
	<Table>
		<TableHead>
			<TableRow>
				{
					[...Array(8)].map( () =>
						<TableCell {...tableHeadStyle} >
							<Skeleton variant="rectangular" />	
						</TableCell>
					)
				}
			</TableRow>
		</TableHead>
		<TableBody>
			{
				[...Array(10)].map( () => (
					<TableRow>
						{[...Array(8)].map(() => <TableCell {...tableDataStyle} ><Skeleton variant="rectangular" />	</TableCell>)}
					</TableRow>
				))
			}
		</TableBody>
	</Table>
 )

}

export default TableSkeleton