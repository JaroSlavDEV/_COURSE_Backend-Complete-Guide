use users
// Cleanup previous changes
db.customers.drop();

const user1 = {
    name: {
        first: 'John',
        last:  'Doe'
    },
    address: {
        street: 'Some street',
        apt:    123
    }
}

const user2 = {
    name: {
        first: 'Marta',
        last:  'Smith'
    },
    address: {
        city: 'London',
        country: 'United Kingdom'
    },
    scores: [45, 78, 61]
}

db.customers.insertOne(user1);
db.customers.insertOne(user2);

print('\n==================================\n')
db.customers.find().pretty()