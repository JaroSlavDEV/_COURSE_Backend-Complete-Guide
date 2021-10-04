use users

// Cleanup previous changes
db.customers.drop();

// WriteResult({ "nRemoved" : 0 })
db.customers.remove({ name: 'John' })