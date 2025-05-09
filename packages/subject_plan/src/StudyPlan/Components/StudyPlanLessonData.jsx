import { createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";
import { useState } from "react";
import { CreateDelayer } from "@hrbolek/uoisfrontend-shared";


const InsertStudyPlanLessonAsyncAction = createAsyncGraphQLAction(
    `mutation MyMutation($planId: UUID!, $topicId: UUID!, $lessontypeId: UUID!, $id: UUID, $name: String, $length: Int) {
  studyPlanLessonInsert(
    studyPlanLesson: {lessontypeId: $lessontypeId, planId: $planId, topicId: $topicId, id: $id, name: $name, length: $length}
  ) {
    __typename
    ...Error
    ...StudyPlanLesson
  }
}

fragment Error on InsertError {
  msg
  failed
  input
}

fragment StudyPlanLesson on StudyPlanLessonGQLModel {
  __typename
  id
  name
  order
  length
  lessontypeId
  event {
    startdate
    enddate
  }
  instructors {
    id
    name
    surname
  }
  studyGroups {
    id
    name
  }
  facilities {
    id
    name
  }
  topic {
    id
    name
    description
  }
}`)

export const StudyPlanLessonData = ({studyplan}) => {
  const { fetch: fetchInsert, loading, error } = useAsyncAction(
    InsertStudyPlanLessonAsyncAction,
    {},
    { deferred: true }
  );

  const [name, setName] = useState("");
  const [delayer] = useState(() => CreateDelayer(1000)); // nepovinné

  const onCreate = () => {
    const insertParams = {
      id: crypto.randomUUID(),
      length: 90, 
      name,
      planId: "6d8c33bf-d47a-4f68-9669-c599086f18bf",
      topicId: "d47f63b2-f62d-4e11-bb03-24497459c55a",
      lessontypeId: "e2b7cbf6-95e1-11ed-a1eb-0242ac120002",
    };

    fetchInsert(insertParams )
      .then((json) => {
        console.log("Lekce vytvořena:", json);
        alert("Lekce vytvořena!");
        setName("");
        
        // TODO: doplnit třeba refetch dat nebo dispatch update
      })
      .catch((err) => {
        console.error("Chyba při vytváření lekce", err);
        alert("Chyba při vytváření lekce");
      });
  };

  return (
    <div>
      <h3>Vytvořit novou lekci</h3>
      <input
        className="form-control"
        type="text"
        placeholder="Název lekce"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <button
        className="btn btn-primary mt-2"
        onClick={onCreate}
        disabled={loading || !name.trim()}
      >
        Vytvořit lekci
      </button>

      {loading && <div>Probíhá vytváření lekce…</div>}
      {error && <div style={{ color: "red" }}>Chyba: {error.message}</div>}
    </div>
  );
};