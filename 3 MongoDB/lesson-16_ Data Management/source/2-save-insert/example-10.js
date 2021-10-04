use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({_id: ObjectId(), name: 'John'})
// The same result as above example
db.customers.insertOne({ name: 'John' })