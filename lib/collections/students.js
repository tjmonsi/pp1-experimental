Students = new Mongo.Collection("s1v4-students")

Students.attachSchema(new SimpleSchema({
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
  generate: {
    type: String
  },
  userId: {
    type: String
  }
}))

if (Meteor.isServer) {
  // Students._ensureIndex({studentNumber: 1})
  Students._ensureIndex({degree: 1})
  Students._ensureIndex({generate: 1})
  Students._ensureIndex({college: 1, degree: 1})
  Students._ensureIndex({userId: 1})
}