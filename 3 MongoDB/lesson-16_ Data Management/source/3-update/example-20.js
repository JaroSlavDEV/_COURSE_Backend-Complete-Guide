use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ 
    name: 'John',
    scores: [ 70, 62 ]
})

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update(
    { name: "John" },
    { $push: { scores: { $each: [ 62, 90, 92, 85 ] } } }
)
print('===============2==============')
db.customers.find()
print('===============2==============')

db.customers.update(
    { name: "John" },
    { $addToSet: { scores: { $each: [ 62, 90, 92, 85, 86 ] } } }
)
print('===============3==============')
db.customers.find()
print('===============3==============')