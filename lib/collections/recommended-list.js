RecommendedList = new Mongo.Collection("s1v4-recommended-list")

RecommendedList.attachSchema(new SimpleSchema({
  recommendedListVersionId: {
    type: String
  },
  studentNumber: {
    type: String
  },
  course: {
    type: String
  },
  section: {
    type: String
  },
  year: {
    type: Number,
    optional: true
  },
  units: {
    type: Number
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
  RecommendedList._ensureIndex({recommendedListVersionId: 1, studentNumber: 1})
  RecommendedList._ensureIndex({recommendedListVersionId: 1, course: 1, section: 1})
}