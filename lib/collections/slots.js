Slots = new Mongo.Collection("s1v4-slots")

Slots.attachSchema(new SimpleSchema({
  classListVersionId: {
    type: String
  },
  classlistId: {
    type: String
  },
  wef: {
    type: Number,
    allowedValues: [1,2,3]
  },
  course: {
    type: String
  },
  section: {
    type: String
  },
  studentNumber: {
    type: String
  },
  dayTimeBin: {
    type: [Number]
  },
  time: {
    type: String
  },
  day: {
    type: String
  },
  year: {
    type: Number,
    optional: true
  },
  units: {
    type: Number
  },
  grade: {
    type: String,
    optional: true
  },
  courseRank: {
    type: Number,
    optional: true
  },
  contrib: {
    type: Number,
    optional: true
  }
}))

if (Meteor.isServer) {
  Slots._ensureIndex({classListVersionId: 1, classListId: 1, wef: 1})
  Slots._ensureIndex({classListVersionId: 1, studentNumber: 1, wef: 1})
  Slots._ensureIndex({classListVersionId: 1, studentNumber: 1, dayBinTime: 1})
  Slots._ensureIndex({classListVersionId: 1, course: 1, section: 1, wef: 1})
}