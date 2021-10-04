use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ 
    name: 'John',
    products: [
        { apples: 10 },
        { lime: 3 }
    ] })

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update({ name: 'John' }, { $addToSet: { products: { lime: 3 } }}) 

print('===============2==============')
db.customers.find()
print('===============2==============')

db.customers.update({ name: 'John' }, { $addToSet: { products: { lime: 5 } }}) 

print('===============3==============')
db.customers.find()
print('===============3==============')