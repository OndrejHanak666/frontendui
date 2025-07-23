import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EvaluationLargeFragment } from "./EvaluationFragments";

const EvaluationUpdateMutation = createQueryStrLazy(
`
mutation MyMutation($id: UUID!, $lastchange: DateTime!, $points: Int, $passed: Boolean!, $grade: String) {
  evaluationUpdate(
    evaluation: {id: $id, lastchange: $lastchange, points: $points, passed: $passed, grade: $grade}
  ) {
    __typename
    ... on EvaluationGQLModelUpdateError {
      input
      failed
      msg
      Entity {
        id
        lastchange
        points
        passed
        grade
      }
    }
  }
}
`)

export const EvaluationUpdateAsyncAction = createAsyncGraphQLAction(EvaluationUpdateMutation)