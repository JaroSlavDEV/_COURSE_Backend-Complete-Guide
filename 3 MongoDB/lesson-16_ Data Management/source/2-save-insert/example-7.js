use users

// Cleanup previous changes
db.customers.drop();

// Insert with object ids
print('\n================Insert with null====================')
db.customers.insertOne({_id: null, name: 'John'});

print('\n================Insert with {}====================')
db.customers.insertOne({_id: {}, name: 'John'});

// throw an exception: can't use a undefined for _id
print('\n================Throw error====================')
db.customers.insertOne({_id: undefined, name: 'John'});