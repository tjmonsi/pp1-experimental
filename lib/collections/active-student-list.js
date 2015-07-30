ActiveStudentList = new Mongo.Collection("s1v4-active-student-list")

ActiveStudentList.attachSchema(new SimpleSchema({
  activeStudentListVersionId: {
    type: String
  },
  studentNumber: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  sex: {
    type: String
  },
  degree: {
    type: String
  },
  college: {
    type: String
  },
  earned: {
    type: Number,
    optional: true
  },
  classification: {
    type: Number,
    optional: true
  },
  yearLevel: {
    type: Number,
    optional: true
  },
  allowedUnits: {
    type: Number
  },
  allowedUnitsLeft: {
    type: Number
  },
  group: {
    type: Number,
    optional: true
  },
  priority: {
    type: Number,
    optional: true
  },
  nAlternates: {
    type: Number,
    optional: true
  },
  nCurrent: {
    type: Number,
    optional: true
  }
}))

if (Meteor.isServer) {
  ActiveStudentList._ensureIndex({activeStudentListVersionId: 1, studentNumber: 1})
  ActiveStudentList._ensureIndex({activeStudentListVersionId: 1, college: 1, degree: 1})
  ActiveStudentList._ensureIndex({activeStudentListVersionId: 1, degree: 1})
}