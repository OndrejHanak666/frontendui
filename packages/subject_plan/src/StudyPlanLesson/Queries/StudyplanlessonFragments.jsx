import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const StudyplanlessonLinkFragment = createQueryStrLazy(
`
fragment StudyplanlessonLink on StudyPlanLessonGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const StudyplanlessonMediumFragment = createQueryStrLazy(
`
fragment StudyplanlessonMedium on StudyPlanLessonGQLModel {
  ...StudyplanlessonLink
}
`, StudyplanlessonLinkFragment)

export const StudyplanlessonLargeFragment = createQueryStrLazy(
`
fragment StudyplanlessonLarge on StudyPlanLessonGQLModel {
  ...StudyplanlessonMedium
}
`, StudyplanlessonMediumFragment)
  