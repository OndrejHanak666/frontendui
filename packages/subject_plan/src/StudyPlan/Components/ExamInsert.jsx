import { createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";  
import { useState } from "react";
import { CreateDelayer } from "@hrbolek/uoisfrontend-shared";

const InsertExamAsyncAction = createAsyncGraphQLAction(`mutation MyMutation($id: UUID!, $lastchange: DateTime!, $examId: UUID!) {
  studyPlanUpdate(
    studyPlan: {id: $id, lastchange: $lastchange, examId: $examId}
  ) {
    __typename
    ... on StudyPlanGQLModelUpdateError {
      input
      failed
      msg
      Entity {
        id
        lastchange
        examId
      }
    }
    ... on StudyPlanGQLModel {
      id
      lastchange
      examId
    }
  }
}`);


export const ExamInsert = ({studyplan}) => {
    const { fetch: fetchInsert, loading, error } = useAsyncAction(
        InsertExamAsyncAction,
        {},
        { deferred: true }
    );

    const [delayer] = useState(() => CreateDelayer(500));
    const onCreate = () => {
    const insertParams = {
        id: studyplan.id,
        lastchange: studyplan.lastchange,
        examId: "9575b4c5-f92a-404d-aef0-bda290a5212d"  // id pro zkousku
    };

    fetchInsert(insertParams)
      .then((json) => {
        console.log("Zkouška přidána!:", json);
        alert("Zkouška přidána!");
      }).catch((err) => {
        console.error("Chyba při přidávání zkoušky", err);
        alert("Chyba při přidávání zkoušky");
      });
  };

  return (
    <div>
      
      <button
        className="btn btn-primary mt-2"
        onClick={onCreate}
        disabled={loading }
      >
        Přidat zkoušku
      </button>

      {loading && <div>Probíhá přidávání zkoušky...</div>}
      {error && <div style={{ color: "red" }}>Chyba: {error.message}</div>}
    </div>
  );
};

