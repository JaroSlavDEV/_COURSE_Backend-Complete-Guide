use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ name: 'John' })

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update({ name: 'John' }, { name: 'Andrey' })

print('===============2==============')
db.customers.find()
print('===============2==============')