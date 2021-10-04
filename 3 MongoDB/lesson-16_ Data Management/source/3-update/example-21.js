use users

// Cleanup previous changes
db.customers.drop();

const { insertedId } = db.customers.insertOne({ 
    name: 'John',
    scores: [ 70, 62 ]
})

db.customers.update({ _id: insertedId }, { $set: { name: 'Andrey' } });

db.customers.find();