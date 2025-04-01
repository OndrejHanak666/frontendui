import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const PlanLinkFragment = createQueryStrLazy(
`
fragment PlanLink on PlanGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const PlanMediumFragment = createQueryStrLazy(
`
fragment PlanMedium on PlanGQLModel {
  ...PlanLink
}
`, PlanLinkFragment)

export const PlanLargeFragment = createQueryStrLazy(
`
fragment PlanLarge on PlanGQLModel {
  ...PlanMedium
}
`, PlanMediumFragment)
  