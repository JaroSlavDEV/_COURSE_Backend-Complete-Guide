use users
// Cleanup previous changes
db.customers.drop();

db.customers.save({ _id: 1, name: 'John' })

print('==============1==============')
db.customers.find()
print('==============1==============')

db.customers.save({ _id: 1, age: 25 })

print('==============2==============')
db.customers.find()
print('==============2==============')