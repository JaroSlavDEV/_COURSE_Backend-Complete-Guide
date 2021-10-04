load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers');

const users = [];

for (let i = 0; i < 50; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        scores: randomArray(randomNumber(5, 10), 1, 20),
    });
}

db.customers.insert(users);

db.customers.find({}, {_id: false})
print('========================================================')
db.customers.find({ scores: { $size: 8 } }, { _id: false, scores: true });
