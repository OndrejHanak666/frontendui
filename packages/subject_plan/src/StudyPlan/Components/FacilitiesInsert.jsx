import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";
import { useState, useRef, useEffect } from "react";

const InsertFacilityAsyncAction = createAsyncGraphQLAction(`query($pattern: String!){
  facilityPage(where:{name :{_ilike: $pattern}}) {
    __typename
    id
    name
  }
}`)

const LocalFacility = ({facility, onSelect}) => {
    const onClick = (e) => {
        e.preventDefault();
        console.log("LocalFacility.onClick", facility.id, facility.name)
        onSelect(facility)
    }
    return (
        <div>
            <a onClick={onClick} href="#">{facility.name} [{facility.id}]</a>
        </div>
    )
}


export const FacilitiesInsert = () => {
    const {loading, error, fetch} = useAsyncAction(
        InsertFacilityAsyncAction,
        {},
        { deferred: true }
    );
    const inputRef = useRef(null);
    const [facilities, setFacilities] = useState([]);
    const [delayer, setDelayer] = useState(() => CreateDelayer(500)); 

    const onSelect =  async (facility) => {
        console.log("onSelect", facility.id, facility.name)
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
          const facilities = json?.data?.facilityPage || []
          setFacilities(facilities);
          return json;
        }
      ))

    }
    else {
      setFacilities([]);
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
          {facilities &&
            facilities.map((facility) => {
              return <LocalFacility key={facility.id} facility={facility} onSelect={onSelect}/>; //TODO: define localgroup
          })}
      </div>
  )
    
}