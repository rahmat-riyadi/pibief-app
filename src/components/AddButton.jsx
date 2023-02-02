import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"

export const AddButton = ({ title, onClick }) => {
    return(
        <Button 
            variant='contained' 
            disableElevation 
            color='secondary' 
            sx={{ 
                width: 'fit-content', 
                color: '#fff', 
                textTransform: 'capitalize',
                fontWeight: 300
            }}
            onClick={onClick}
            startIcon={ <Add/> }
        >
            {title}
        </Button>
    )
}