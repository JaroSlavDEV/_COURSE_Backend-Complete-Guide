load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    users.push({
        fName: faker.fName(),
        lName: faker.lName(),
        scores: randomArray(randomNumber(1, 5), 24, 50)
    });
}

const result = db.customers.insert(users);

db.customers.createIndex({ scores: 1 }); // ← array for number fields

// Works for queries with arrays
db.customers.find({ scores: { $lt: 25 } });