use users
// Cleanup previous changes
db.customers.drop();

db.customers.save({ name: 'John' })

db.customers.find()

db.customers.save({ name: 'John', age: 25 })

db.customers.find()