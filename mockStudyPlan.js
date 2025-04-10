export const mockStudyplan = {
    topic: {
      id: "tp1",
      name: "Asynchronní JavaScript",
      description: "Základy asynchronního zpracování v JS (callbacky, promise, async/await)."
    },
    event: {
      startdate: "2025-04-14T10:00:00Z",
      enddate: "2025-04-14T11:30:00Z"
    },
    semester: {
      id: "sem1",
      order: 2,
      subject: {
        id: "sub1",
        name: "PSP",
        program: {
          id: "prog1",
          name: "Programování a softwarové inženýrství"
        }
      }
    },
    lessons: [
      {
        id: "l1",
        order: 1,
        length: 90,
        topic: {
          id: "tp1",
          name: "Git a verzování",
          description: "Základy práce s Git, commitování a branchování"
        },
        instructors: [
          { id: "i1", name: "Jana", surname: "Nováková" },
          { id: "i2", name: "Petr", surname: "Malý" }
        ],
        facilities: [
          { id: "f1", name: "U13/105" }
        ],
        studyGroups: [
          { id: "g1", name: "PSP-23-1" },
          { id: "g2", name: "PSP-23-2" }
        ],
        event: {
          startdate: "2025-04-07T09:00:00Z",
          enddate: "2025-04-07T10:30:00Z"
        }
      },
      {
        id: "l2",
        order: 2,
        length: 90,
        topic: {
          id: "tp2",
          name: "Asynchronní JS",
          description: "Promises, async/await, praktické použití"
        },
        instructors: [
          { id: "i1", name: "Jana", surname: "Nováková" }
        ],
        facilities: [
          { id: "f2", name: "U11/210" }
        ],
        studyGroups: [
          { id: "g1", name: "PSP-23-1" }
        ],
        event: {
          startdate: "2025-04-14T10:00:00Z",
          enddate: "2025-04-14T11:30:00Z"
        }
      }
    ]
  };