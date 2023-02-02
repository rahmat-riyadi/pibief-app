import { Dialog, Stack, Typography, Button } from "@mui/material";
import warning from "../assets/image/warning.svg";
import success from "../assets/image/done.svg";
const NotifDialog = (props) => {

  return (
    <Dialog open={props.show}>
      <Stack sx={{ m: 3, minWidth: '282px' }} direction="column" alignItems="center">
        <img
          src={props.status ? success : warning}
          alt={props.status ? success : warning}
          style={{ width: "100px" }}
        />
				{ 
					props.status 
					&&
					<Typography
						variant="body1"
						sx={{ mt: 3, mb: 1, color: "#181C32", fontSize: "18px", fontWeight: '600' }}
					>
						Sukses
					</Typography>
				}
				{
					props.status
					?
					<Typography
						variant="body1"
						sx={{  color: "#181C32", fontSize: "14px", fontWeight: '300' }}
					>
						{props.message}
					</Typography>
					:
					<Typography
						variant="body1"
						sx={{ my: 3, color: "#181C32", fontSize: "14px" }}
					>
						{props.message}
					</Typography>
				}
        {!props.status && (
          <Stack
            direction="row"
            justifyContent="space-between"
            columnGap="20px"
            sx={{ width: "100%" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{ textTransform: "none", width: "132px" }}
              onClick={props.onCancel}
            >
              {props.onCancelText}
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              sx={{ textTransform: "none", width: "132px", color: "#fff" }}
              onClick={props.onAccept}
            >
              {props.onAcceptText}
            </Button>
          </Stack>
        )}
      </Stack>
    </Dialog>
  );
};

export default NotifDialog;
