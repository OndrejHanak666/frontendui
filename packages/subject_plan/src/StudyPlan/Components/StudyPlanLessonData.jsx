import { createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";

const InsertStudyPlanLessonAsyncAction = createAsyncGraphQLAction(
    `mutation MyMutation($planId: UUID!, $topicId: UUID!, $lessontypeId: UUID!, $id: UUID) {
  studyPlanLessonInsert(
    studyPlanLesson: {lessontypeId: $lessontypeId, planId: $planId, topicId: $topicId, id: $id}
  ) {
    __typename
    ...Error
    ...StudyPlanLesson
  }
}

fragment Error on InsertError {
  msg
  failed
  input
}

fragment StudyPlanLesson on StudyPlanLessonGQLModel {
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
}`)