import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CabangEntity = () => {

	const navigate = useNavigate()

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2, fontSize: 21, fontWeight: 600 }}>
        Cabang
      </Typography>
			<Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="body1" sx={{ fontWeight: "300", fontSize: 12 }}>
          Tampilkan 10 Cabang
        </Typography>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          sx={{
            width: "fit-content",
            color: "#fff",
            textTransform: "capitalize",
          }}
          onClick={() => navigate("/entity/karyawan/tambah")}
        >
          Tambah Cabang
        </Button>
      </Stack>
    </Box>
  );
};

export default CabangEntity;
