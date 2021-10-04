load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    users.push({ fName: faker.fName() });
}

const data = db.customers.insert(users);

// Specify name for the index
db.customers.createIndex({ fName: 1 }, { name: 'firstName' });

db.customers.getIndexes();