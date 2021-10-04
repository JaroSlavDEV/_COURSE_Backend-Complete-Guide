use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ name: 'John', age: 25 })

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update({ name: 'John' }, { $rename: { name: 'fName' } })

print('===============2==============')
db.customers.find()
print('===============2==============')