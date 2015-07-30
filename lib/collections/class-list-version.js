ClassListVersion = new Mongo.Collection("s1v4-class-list-version")

ClassListVersion.attachSchema(new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  active: {
    type: Boolean
  }
}))

if (Meteor.isServer) {
  ClassListVersion._ensureIndex({active: 1})
}