import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { PlanLargeFragment } from "./PlanFragments";

const PlanUpdateMutation = createQueryStrLazy(
`
mutation PlanUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: planUpdate(
    plan: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on PlanGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...PlanLarge
      }      
    }
    ...PlanLarge
  }
}
`, PlanLargeFragment)

export const PlanUpdateAsyncAction = createAsyncGraphQLAction(PlanUpdateMutation)