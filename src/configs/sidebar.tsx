import { ReactNode } from "react";
import { ROUTER_PATHS } from "./router";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export interface ISidebar {
  title: string;
  path: string;
  icon: ReactNode;
}

export const sidebar: ISidebar[] = [
  {
    title: "Dashboard",
    path: ROUTER_PATHS.dashboard.root,
    icon: <DashboardOutlinedIcon />,
  },
  {
    title: "Post Management",
    path: ROUTER_PATHS.postManagement,
    icon: <ManageAccountsOutlinedIcon />,
  },
  {
    title: "Settings",
    path: ROUTER_PATHS.setting,
    icon: <SettingsOutlinedIcon />,
  },
];
