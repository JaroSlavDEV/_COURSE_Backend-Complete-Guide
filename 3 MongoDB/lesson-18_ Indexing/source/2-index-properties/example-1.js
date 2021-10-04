load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 50; i++) {
    users.push({ fName: faker.fName() });
}

const result = db.customers.insert(users);

// background: true will not block read/write operations
db.customers.createIndex({ fName: 1 }, { background: true })