import { Button } from "@mui/material"

const btnBaseStyle = { 
    textTransform: 'capitalize', 
    fontSize: '12px', 
    p: '6px 8px', 
    flex: 1,
    border: '1px solid #EAEAEA'
}

export const TableButton = ({ onClick, title, type }) => {
    return(
        <Button
            color='greyFont' 
            variant='outlined' 
            size='small' 
            sx={{ 
                ...btnBaseStyle,
                '&:hover':{
                    bgcolor: (type === 'delete') ? '#C92B28' : '#50CD89',
                    color: '#fff',
                    border: 'none'
                }
            }} 
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

