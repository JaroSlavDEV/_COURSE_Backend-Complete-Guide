load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 5; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
    });
}

users.push({ 
    fName: 'Andrey',
    lName: 'Prisniiak',
});

db.customers.insert(users);

db.customers.find({ fName: 'Andrey' });
print('===================================')
db.customers.findOne({ fName: 'Andrey' });

