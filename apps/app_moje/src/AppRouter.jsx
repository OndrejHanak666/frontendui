
import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
  
import { StudyplanRouterSegment } from "@hanak/uoisfrontend-subject_plan";

import { StudyplanPage} from "@hanak/uoisfrontend-subject_plan";
import { DataGeneratorPage } from "@hanak/uoisfrontend-subject_plan";

/*import { mockStudyplan } from "../../../mockStudyPlan";


import { StudyplanLessonsAttribute } from "../../../packages/subject_plan/src/StudyPlan/Vectors/StudyPlanLessonsAttribute"
import { StudyplanInstructorsAttribute } from "../../../packages/subject_plan/src/StudyPlan/Vectors/StudyPlanInstructorsAttribute";
import { StudyplanFacilitiesAttribute } from "../../../packages/subject_plan/src/StudyPlan/Vectors/StudyPlanFacilitiesAttribute";
import { StudyplanStudygroupsAttribute } from "../../../packages/subject_plan/src/StudyPlan/Vectors/StudyPlanStudyGroupsAttribute";
import { StudyplanEventAttribute } from "../../../packages/subject_plan/src/StudyPlan/Scalars/StudyPlanEventAttribute";
import { StudyplanTopicAttribute } from "../../../packages/subject_plan/src/StudyPlan/Scalars/StudyPlanTopicAttribute";
import { StudyplanSemesterAttribute } from "../../../packages/subject_plan/src/StudyPlan/Scalars/StudyPlanSemesterAttribute";
import { StudyplanSubjectAttribute } from "../../../packages/subject_plan/src/StudyPlan/Scalars/StudyPlanSubjectAttribute";
import { use } from "react";*/



const prefix = "/app_moje" 
export const Routes = [
    //UserRouterSegment
    /*{
        path:"${prefix}/studyplan/:id",
        element: <StudyplanPage />,
    },


    {
        path: "${prefix}/test/lessons",
        element: <StudyplanLessonsAttribute studyplan={mockStudyplan}/>,
    },
    
    {
        path: "${prefix}/test/instructors",
        element: <StudyplanInstructorsAttribute studyplan={mockStudyplan}/>,
    },

    {
        path: "${prefix}/test/facilities",
        element: <StudyplanFacilitiesAttribute studyplan={mockStudyplan}/>,
    },

    {
        path: "${prefix}/test/studygroups",
        element: <StudyplanStudygroupsAttribute studyplan={mockStudyplan}/>,
    },

    {
        path: "${prefix}/test/event",
        element: <StudyplanEventAttribute studyplan={mockStudyplan}/>,
    },

    {
        path: "${prefix}/test/topic",
        element: <StudyplanTopicAttribute studyplan={mockStudyplan}/>,
    },

    {
        path: "${prefix}/test/semester",
        element: <StudyplanSemesterAttribute studyplan={mockStudyplan}/>,
    },

    {
        path: "${prefix}/test/subject",
        element: <StudyplanSubjectAttribute studyplan={mockStudyplan}/>,
    }*/

    StudyplanRouterSegment,
    {
        path: `${prefix}/studyplan/random`,
        element: <DataGeneratorPage/>
    }
    
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

