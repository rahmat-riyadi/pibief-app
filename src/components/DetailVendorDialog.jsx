import { Close } from '@mui/icons-material';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	Typography
} from '@mui/material'
import PropTypes from 'prop-types';

const DetailVendorDialog = ({ children, open, onClose, onClick }) => {
  return (
    <Dialog
			open={open}
			onClose={onClose}
			PaperProps={{ sx: { width: '680px', borderRadius: '15px' } }}
		>
      <DialogTitle sx={{ 
					display: 'flex', 
					alignItems: 'center', 
					justifyContent: 'space-between',
					py: 1
				}} 
			>
				<Typography variant='body1' sx={{ fontWeight: 600 }} >
					Detail Vendor
				</Typography>
				<IconButton onClick={onClick} >
					<Close/>
				</IconButton>
			</DialogTitle>
			<Divider/>
			<DialogContent>
				{children}
			</DialogContent>
    </Dialog>
  );
};

DetailVendorDialog.propTypes = {
	children: PropTypes.node
}

export default DetailVendorDialog;
