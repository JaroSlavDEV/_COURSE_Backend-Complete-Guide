use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ product: 'apple', price: 12 })
db.customers.insertOne({ product: 'orange', price: 20 })
db.customers.insertOne({ product: 'lime', price: 23 })

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update({}, { $max: { price: 21 } }, { multi: true })

print('===============2==============')
db.customers.find()
print('===============2==============')