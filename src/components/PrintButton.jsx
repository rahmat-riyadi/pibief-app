import { Button } from "@mui/material"
import PrintSvg from '../assets/icons/printer.svg'
import WarningSvg from '../assets/icons/info-circle.svg'

export const PrintButton = ({ disable = false, onClick }) => {
    return(
        <Button 
            variant='contained' 
            disableElevation
            color={disable ? 'disable' : 'secondary' }
            startIcon={ <img src={PrintSvg} alt="icn" /> } 
            endIcon={ disable && <img src={WarningSvg} alt="icn" /> }
            sx={{ 
                textTransform: 'capitalize', 
                color: '#FFF', 
                my: 2.5, 
                mr: 2.5 
            }} 
            >
            Cetak SP
        </Button>
    )    
}