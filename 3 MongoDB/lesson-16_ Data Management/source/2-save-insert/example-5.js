use users

// Cleanup previous changes
db.customers.drop();

print('===========1============\n')
db.customers.insert({_id:1}); // Normal writes
db.customers.insert({_id:1}); // returns object with writeError

print('===========2============\n')
db.customers.insertOne([{ name: 'John' }]) // throw an exception

print('===========3============\n')
db.customers.insertMany({ name: 'John' }) // throw an exception

