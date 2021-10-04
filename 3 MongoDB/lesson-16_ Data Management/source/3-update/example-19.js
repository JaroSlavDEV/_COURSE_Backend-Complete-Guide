use users

// Cleanup previous changes
db.customers.drop();

db.customers.insertOne({ 
    name: 'John',
    scores: [ 1, 2, 3, 4, 5 ]
})

print('===============1==============')
db.customers.find()
print('===============1==============')

db.customers.update(
    { name: 'John' },
    { 
        $push: { 
            scores: { 
                $each: [ 7, 8, 9 ], // ... spread
                $position: 2
            }
        } 
    }
)
print('===============2==============')
db.customers.find()
print('===============2==============')