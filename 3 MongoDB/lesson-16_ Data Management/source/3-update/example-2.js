use users

// Cleanup previous changes
db.customers.drop();

db.customers.update({ name: 'John' }, { name: 'Andrey' }, { upsert : true })

db.customers.find()