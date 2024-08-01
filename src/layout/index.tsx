import { Box, Stack } from "@mui/material";
import Navigator from "./Navigator";
import { Outlet } from "react-router";

function Layout() {
  return (
    <Stack sx={{ minHeight: "80vh" }}>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          padding: "24px 0px 32px",
        }}
      >
        <Navigator />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            px: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
            justifyContent: "center",
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              width: "100%",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "16px", md: "16px", lg: "24px" },
            }}
            maxWidth="lg"
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

export default Layout;
