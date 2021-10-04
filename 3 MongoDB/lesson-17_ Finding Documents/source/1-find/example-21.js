load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers');

const users = [];

for (let i = 0; i < 100; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        scores: randomNumber(1, 100),
    });
}

db.customers.insert(users);

// Деление по %
db.customers.find({ scores: { $mod: [ 2, 0 ] }});
