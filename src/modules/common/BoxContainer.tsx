import { Box, Paper, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  leftHeader?: ReactNode;
  children: ReactNode;
  sx?: SxProps;
}

function BoxContainer({ leftHeader, children, sx }: Props) {
  return (
    <Paper elevation={2} sx={{ padding: "12px 16px", ...sx }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap="8px"
        minHeight={!leftHeader ? 0 : "42px"}
        my="4px"
      >
        <Box flex={1}>{leftHeader}</Box>
      </Box>

      {children}
    </Paper>
  );
}

export default BoxContainer;
