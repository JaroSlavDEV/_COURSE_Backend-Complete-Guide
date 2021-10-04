use users

// Cleanup previous changes
db.customers.drop();

// Insert with numeric ids
db.customers.insertOne({_id: 1, name: 'John'});
db.customers.insertOne({_id: 2, name: 'John'});

// Insert with object ids
db.customers.insertOne({_id: new Date(), name: 'John'});
db.customers.insertOne({_id: new Date(), name: 'John'});