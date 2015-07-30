Employees = new Mongo.Collection("s1v4-employees")

Employees.attachSchema(new SimpleSchema({
  employeeId: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  unitCode: {
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
  Employees._ensureIndex({unitCode: 1})
  Employees._ensureIndex({generate: 1})
  Employees._ensureIndex({userId: 1})
}