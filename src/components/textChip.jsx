import { Box, Typography } from "@mui/material";

const TextChip = ({ text, status }) => {
	return (
		<Box
			sx={{
				width: "fit-content",
				p: "6px 8px",
				bgcolor:
					status
						? "rgba(80, 205, 137, 0.2)"
						: "rgba(249, 161, 27, 0.2)",
				color: status ? "#50CD89" : "#F9A11B",
				borderRadius: "3px",
			}}
		>
			<Typography variant="body1" sx={{ fontSize: "12px" }}>
				{text}
			</Typography>
		</Box>
	);
};

export default TextChip