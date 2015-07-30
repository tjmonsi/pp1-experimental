ClassList = new Mongo.Collection("s1v4-class-list")

ClassList.attachSchema(new SimpleSchema({
  course: {
    type: String
  },
  section: {
    type: String
  },
  classListVersionId: {
    type: String
  },
  slots: {
    type: Number
  },
  available: {
    type: Number
  },
  time: {
    type: String
  },
  day: {
    type: String
  },
  dayTimeBin: {
    type: [Number]
  }
}))

if (Meteor.isServer) {
  ClassList._ensureIndex({course: 1, section: 1})
  ClassList._ensureIndex({classListVersionId: 1, _id: 1})
  ClassList._ensureIndex({classListVersionId: 1, course: 1, section: 1})
}