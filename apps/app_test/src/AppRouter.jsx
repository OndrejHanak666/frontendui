
import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";

import { GroupPage, UserRouterSegment } from "../../../packages/package_test/src";
import { GroupRouterSegment } from "../../../packages/package_test/src";

export const Routes = [
    
    /*{
        path: `/group/group/view/:id`,
        element: <GroupPage />,
    }*/
   GroupRouterSegment,
   UserRouterSegment
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

