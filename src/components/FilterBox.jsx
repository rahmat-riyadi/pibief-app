import { Box, InputBase, Typography } from "@mui/material"

export const FilterBox = () => {
    return(
        <Box sx={{ bgcolor: 'primary.main', p: 2, borderRadius: '10px 10px 0 0' }} >
            <Typography 
                variant="body1" 
                sx={{ color: '#fff', fontSize: '12px', mb: 1 }}
            >
                Cari Data
            </Typography>
            <InputBase
                sx={{ 
                    bgcolor: '#fff',
                    width: 270,
                    px: 2,
                    py: 0.3,
                    borderRadius: '5px'
                }}
            />
        </Box>
    )
}