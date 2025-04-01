import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { PlanLargeFragment } from "./PlanFragments";

const PlanReadPageQuery = createQueryStrLazy(
`
query PlanReadPageQuery($skip: Int, $limit: Int, $where: PlanWhereInputFilter) {
  result: planPage(skip: $skip, limit: $limit, where: $where) {
    ...PlanLarge
  }
}
`, 
    PlanLargeFragment)

export const PlanReadPageAsyncAction = createAsyncGraphQLAction(PlanReadPageQuery)