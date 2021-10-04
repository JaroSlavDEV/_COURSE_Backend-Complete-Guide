load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers');

const users = [];

for (let i = 0; i < 20; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        scores: randomArray(10, 1, 20),
    });
}

db.customers.insert(users);

db.customers.find({ scores: { $all: [3, 9] } }, { scores: true });
