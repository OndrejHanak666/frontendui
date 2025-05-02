
import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
  
import { StudyplanRouterSegment } from "../../../packages/subject_plan/src/StudyPlan/Pages/StudyplanRouterSegment";


import { StudyplanPage } from "../../../packages/subject_plan/src/StudyPlan/Pages/StudyplanPage";
import { DataGeneratorPage } from "@hanak/uoisfrontend-subject_plan";



const prefix = "/app_moje" 
export const Routes = [
    
    StudyplanRouterSegment,
    {
        path: `${prefix}/studyplan/random`,
        element: <DataGeneratorPage/>
    },

    {
        path: `${prefix}/studyplan/:id`,
        element: <StudyplanPage/>
    }
    
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

