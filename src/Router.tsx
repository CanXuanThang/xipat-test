import { useRoutes } from "react-router-dom";
import Layout from "./layout";
import { ROUTER_PATHS } from "./configs";
import Dashboard from "./modules/components/dashboard";
import SubcriptionChart from "./modules/components/dashboard/SubcriptionChart";
import RevenueChart from "./modules/components/dashboard/RevenueChart";
import PostManagement from "./modules/components/postsManagement";
import Setting from "./modules/components/settings";

const Router = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: ROUTER_PATHS.dashboard.root,
          element: <Dashboard />,
          children: [
            {
              path: ROUTER_PATHS.dashboard.description,
              element: <SubcriptionChart />,
            },
            {
              path: ROUTER_PATHS.dashboard.revenue,
              element: <RevenueChart />,
            },
          ],
        },
        {
          path: ROUTER_PATHS.postManagement,
          element: <PostManagement />,
        },
        {
          path: ROUTER_PATHS.setting,
          element: <Setting />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
