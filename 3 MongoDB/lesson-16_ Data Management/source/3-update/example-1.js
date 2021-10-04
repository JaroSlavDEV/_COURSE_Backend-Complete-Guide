use users

// Cleanup previous changes
db.customers.drop();

db.customers.update({ name: 'John' }, { name: 'Andrey' })

// OR
// db.customers.update({ name: 'John' }, { $set: { name: 'Andrey' }})