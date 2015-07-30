ActiveStudentListVersion = new Mongo.Collection("s1v4-active-student-list-version")

ActiveStudentListVersion.attachSchema(new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  active: {
    type: Boolean
  }
}))

if (Meteor.isServer) {
  ActiveStudentListVersion._ensureIndex({active: 1})
}