load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers');

const users = [];

for (let i = 0; i < 10; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        scores: randomArray(randomNumber(3, 40), 1, 20),
    });
}

db.customers.insert(users);
db.customers.find({}, { scores: true });
print('===========================================================')
db.customers.find({ scores: { $gte: 10 } }, { "scores.$": true });