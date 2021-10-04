load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    users.push({
        fName: faker.fName(),
        lName: faker.lName(),
    });
}

const result = db.customers.insert(users);

// Indexes that supports sort directions
db.customers.createIndex({ fName: 1, lName: -1 });

// Works only for: +++++++++++
// db.customers.find({ fName: 'Hadley', lName: 'Purdy' }).sort({ fName: 1, lName: -1 })
// OR
// db.customers.find({ fName: 'Hadley', lName: 'Purdy' }).sort({ fName: -1, lName: 1 })

// Didn't work for: ----------
// db.customers.find({ fName: 'Hadley', lName: 'Purdy' }).sort({ fName: -1, lName: -1 })
// OR
// db.customers.find({ fName: 'Hadley', lName: 'Purdy' }).sort({ fName: 1, lName: 1 })

// List all available indexes
db.customers.getIndexes();