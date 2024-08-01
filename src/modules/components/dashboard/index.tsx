import { Box, Button, Typography } from "@mui/material";
import BoxContainer from "../../common/BoxContainer";
import { Outlet, useLocation, useNavigate } from "react-router";
import { ROUTER_PATHS } from "../../../configs";

function Dashboard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <BoxContainer
      sx={{ width: "100%", height: "100%" }}
      leftHeader={<Typography color="#115BB2">Dashboard</Typography>}
    >
      <Box display="flex" gap={2} mb={2}>
        <Button
          variant="outlined"
          color={
            pathname === ROUTER_PATHS.dashboard.description ? "info" : "inherit"
          }
          onClick={() => navigate(ROUTER_PATHS.dashboard.description)}
        >
          Subcription
        </Button>
        <Button
          variant="outlined"
          color={
            pathname === ROUTER_PATHS.dashboard.revenue ? "info" : "inherit"
          }
          onClick={() => navigate(ROUTER_PATHS.dashboard.revenue)}
        >
          Revenue
        </Button>
      </Box>

      <Outlet />
    </BoxContainer>
  );
}

export default Dashboard;
