import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `mutation($id: UUID!, $lastchange: DateTime!, $name: String!, $startdate: DateTime, $enddate: DateTime) {
  result: eventUpdate(event: {
    id: $id, 
    lastchange: $lastchange, 
    name: $name, 
    startdate: $startdate,
    enddate: $enddate
  }) {
    id
    msg
    result: event {
      __typename
      id
      lastchange
      name
      startdate
      enddate
    }
  }
}`

export const UpdateEventAsyncAction = CreateAsyncActionFromMutation(mutation)