import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
  
import { UserRouterSegment } from "@hrbolek/uoisfrontend-ug2";
import { PlanPage } from "../../../packages/subject_plan/src/plan/Pages/PlanPage";
import { TopicPage } from "../../../packages/subject_plan/src";

export const Routes = [
    //UserRouterSegment
    {
        path:"/hello/:id",
        element: <TopicPage />,
    }
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

