import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const StudyplanLinkFragment = createQueryStrLazy(
`
fragment StudyplanLink on StudyPlanGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const StudyplanMediumFragment = createQueryStrLazy(
`
fragment StudyplanMedium on StudyPlanGQLModel {
  
  semester {
    id
    order
    subject {
      id
      name
      program {
        id
        name
      }
    }
  }

  ...StudyplanLink
}
`, StudyplanLinkFragment)

export const StudyplanLargeFragment = createQueryStrLazy(
`
fragment StudyplanLarge on StudyPlanGQLModel {
  
  lessons {
    id
    order
    length
    event {
      startdate
      enddate
    }
    instructors {
      id
      name
      surname
    }
    studyGroups {
      id
      name
    }
    facilities {
      id
      name
    }
    topic {
      id
      name
      description
    }
  }
  ...StudyplanMedium
}
`, StudyplanMediumFragment)
  