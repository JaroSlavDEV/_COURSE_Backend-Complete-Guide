use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ 
    name: 'John',
    products: [
        { apples: 10 },
        { oranges: 7 },
        { lime: 3 },
        { carrot: 9 }
    ] })

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update({ name: 'John' }, { $pullAll: { products: [{ oranges: 7 }, { carrot: 9 }] } })

print('===============2==============')
db.customers.find()
print('===============2==============')