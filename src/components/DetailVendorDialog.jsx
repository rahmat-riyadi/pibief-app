import { Close } from '@mui/icons-material';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton
} from '@mui/material'
import PropTypes from 'prop-types';

const DetailVendorDialog = ({ children, open, onClose, onClick }) => {
  return (
    <Dialog
			open={open}
			onClose={onClose}
			PaperProps={{ sx: { width: '680px' } }}
		>
      <DialogTitle sx={{ 
					display: 'flex', 
					alignItems: 'center', 
					justifyContent: 'space-between' ,
				}} 
			>
				Detail Vendor
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
