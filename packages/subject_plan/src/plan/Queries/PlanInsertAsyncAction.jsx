import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { PlanLargeFragment } from "./PlanFragments";

const PlanInsertMutation = createQueryStrLazy(
`
mutation PlanInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: planInsert(
    plan: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...PlanLarge
  }
}
`,
    PlanLargeFragment)


export const PlanInsertAsyncAction = createAsyncGraphQLAction(PlanInsertMutation)