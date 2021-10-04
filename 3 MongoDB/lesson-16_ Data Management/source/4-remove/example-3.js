use users

// Cleanup previous changes
db.customers.drop();

db.customers.insert({ name: 'John', age: 25 })
db.customers.insert({ name: 'John', age: 30 })

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.remove({ name: 'John' }, { justOne: true })

print('===============1==============')
db.customers.find()
print('===============1==============')
