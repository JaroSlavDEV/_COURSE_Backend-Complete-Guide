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
        scores: randomArray(randomNumber(5, 10), 1, 20),
    });
}

db.customers.insert(users);

const query = [
    { scores: { $size: 7 } },
    { fName: /an/gi }
];

db.customers.find({ $or: query });
