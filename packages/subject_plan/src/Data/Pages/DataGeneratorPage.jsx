import { ProgramManagement } from "../Components";
import { SubjectManagement } from "../Components";
import { StudyPlanGenerator } from "../Components";

export const DataGeneratorPage = () => {
  return (
    <div>
      <h1>Data Generator Page</h1>
      <p>This page is for generating data.</p>
      <ProgramManagement />
      <SubjectManagement />
      <StudyPlanGenerator />
    </div>
  );
}