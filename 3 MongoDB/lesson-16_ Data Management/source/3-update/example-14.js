use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ name: 'John', products: [{ apples: 10 }] })

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update({ name: 'John' }, { $push: { products: { oranges: 6 } } })

print('===============2==============')
db.customers.find()
print('===============2==============')