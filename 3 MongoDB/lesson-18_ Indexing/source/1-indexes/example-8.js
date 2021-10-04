load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 3000; i++) {
    users.push({
        fName: faker.fName(),
        lName: faker.lName(),
        age: randomNumber(18, 90)
    });
}

const result = db.customers.insert(users);

db.customers.createIndex({ age: 1 });

// Works for queries with modifiers
// db.customers.find({ age: { $lt: 25 } })
// OR
// db.customers.find({ fName: 'Lysanne', age: { $lt: 25 } })