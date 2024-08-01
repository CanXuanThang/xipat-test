import { Drawer, List, Link as Muilink, Box, Stack } from "@mui/material";
import SimpleBar from "simplebar-react";
import { sidebar } from "../configs/sidebar";
import { Link, useLocation } from "react-router-dom";

function Navigator() {
  const { pathname } = useLocation();

  return (
    <Drawer
      sx={{
        width: 280,
        flexShrink: 0,
      }}
      PaperProps={{
        style: {
          width: 280,
          overflow: "hidden",
        },
      }}
      elevation={3}
      variant="persistent"
      anchor="left"
      open
    >
      <SimpleBar style={{ maxHeight: "100%", padding: 24 }}>
        <List component="nav" sx={{ display: "flex", flexDirection: "column" }}>
          <Stack gap={1}>
            {sidebar?.map((item, index) => (
              <Box display="flex" gap={2} alignItems="center" key={index}>
                {item.icon}
                <Muilink
                  component={Link}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: pathname.includes(item.path) ? "#3b89cc" : "#344054",
                    fontWeight: 550,
                  }}
                >
                  {item.title}
                </Muilink>
              </Box>
            ))}
          </Stack>
        </List>
      </SimpleBar>
    </Drawer>
  );
}

export default Navigator;
