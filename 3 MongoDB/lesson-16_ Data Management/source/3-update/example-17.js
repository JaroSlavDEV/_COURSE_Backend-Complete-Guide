use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ 
    name: 'John',
    products: [
        { apples: 10 },
        { oranges: 7 },
        { lime: 3 }
    ] })

print('===============1==============')
db.customers.find()
print('===============1==============')

// removes one from the end of products
db.customers.update({ name: 'John' }, { $pop: { products: 1 } }) 

print('===============2==============')
db.customers.find()
print('===============2==============')

// removes one from the start of products
db.customers.update({ name: 'John' }, { $pop: { products: -1 } }) 

print('===============3==============')
db.customers.find()
print('===============3==============')