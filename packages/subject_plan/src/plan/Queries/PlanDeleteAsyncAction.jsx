import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { PlanLargeFragment } from "./PlanFragments";

const PlanDeleteMutation = createQueryStrLazy(
`
mutation PlanDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: planDelete(
    plan: {id: $id, lastchange: $lastchange}
  ) {
    ... on PlanGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...PlanLarge
      }
    }
  }
}
`,
    PlanLargeFragment)

export const PlanDeleteAsyncAction = createAsyncGraphQLAction(PlanDeleteMutation)