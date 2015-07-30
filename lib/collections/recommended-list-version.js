RecommendedListVersion = new Mongo.Collection("s1v4-recommended-list-version")

RecommendedListVersion.attachSchema(new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  active: {
    type: Boolean
  }
}))

if (Meteor.isServer) {
  RecommendedListVersion._ensureIndex({active: 1})
}