import { createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';
import { useState, useRef, useEffect } from "react";
import { CreateDelayer} from "@hrbolek/uoisfrontend-shared";
import { useDispatch } from 'react-redux';

const QueryGroupAsyncAction = createAsyncGraphQLAction(`query ($pattern: String!){
  groupPage(where: {name :{_ilike: $pattern}}) {
    __typename
    id
    name
  }
}`)



const LessonUpdateAsyncAction = createAsyncGraphQLAction(`
mutation MyMutation(
  $id: UUID!,
  $lastchange: DateTime!,
  $lessontypeId: UUID!,
  $topicId: UUID!,
  $eventId: UUID,
  ) {
  studyPlanLessonUpdate(
    studyPlanLesson: {id: $id, lastchange: $lastchange, lessontypeId: $lessontypeId, topicId: $topicId, eventId: $eventId}
  ) {
    ...on StudyPlanLessonGQLModel {
      __typename
      id
      lastchange
    }
  }
}
`)

const LocalGroup = ({group, onSelect}) => {
    const onClick = (e) => {
        e.preventDefault();
        console.log("LocalGroup.onClick", group.id, group.name)
        onSelect(group)
    }
    return (
        <div>
            <a onClick={onClick} href="#">{group.name} [{group.id}]</a>
        </div>
    )
}





export const StudyGroupInsert = ({}) => {
  const {loading, error, fetch} = useAsyncAction(
    QueryGroupAsyncAction,
    {},
    { deferred: true }
  );
  const {fetch: fetchLessonUpdate, loading:lessonloading, error: lessonerror} = useAsyncAction(
      LessonUpdateAsyncAction,
    {},
    { deferred: true }
  );//tady bude mutace)

  const inputRef = useRef(null);
  const [groups, setGroups] = useState([]);
  const [delayer, setDelayer] = useState(() => CreateDelayer(500));

  const onSelect = async (group) => {
    
    console.log("onSelect", group.id, group.name)
    const LessonUpdateParams = {
      id: group.id,
      lastchange: group.lastchange,
      lessontypeId: "e2b7cbf6-95e1-11ed-a1eb-0242ac120002",
      topicId: "d47f63b2-f62d-4e11-bb03-24497459c55a",
      eventId: crypto.randomUUID(),
      
    }

    fetchLessonUpdate(LessonUpdateParams);
  }

   const onChange = (e) => {
  const data = e.target.value;
    if (data.length > 2) {
      delayer(() => fetch({ pattern: `%${data}%` }).then(
        json => {
          const groups = json?.data?.groupPage || []
          setGroups(groups);
          return json;
        }
      ))

    }
    else {
      setGroups([]);
    }
   }

  return (
        <div ref={inputRef}
        style={{
          position: "absolute", // Překrytí ostatních prvků
          top: "1px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          zIndex: 1000, // Zajistí, že bude nad ostatními prvky
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          width: "400px",
        }}
      >
        {lessonloading && <div>Načítám...</div>}
        {lessonerror && <div style={{ color: "red" }}>Chyba: {lessonerror.message}</div>}
          <input
            type="text"
            defaultValue=""
            onChange={onChange}
            className="form-control"
            placeholder="Zadejte název programu"
          />
          {groups &&
            groups.map((group) => {
              return <LocalGroup key={group.id} group={group} onSelect={onSelect}/>; //TODO: define localgroup
          })}
      </div>
  )
}






  





