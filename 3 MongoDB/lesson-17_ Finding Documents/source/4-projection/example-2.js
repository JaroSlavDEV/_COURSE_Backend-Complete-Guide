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
        studying: [{
            class: randomNumber(1, 11),
            score: randomNumber(1, 100),
        }, {
            class: randomNumber(1, 11),
            score: randomNumber(1, 100),
        }, {
            class: randomNumber(1, 11),
            score: randomNumber(1, 100),
        }]
    });
}

db.customers.insert(users);
db.customers.find({}, { studying: true });
print('===========================================================')
db.customers.find({ 'studying.score': { $gte: 50 } }, { "studying.$": 1 })