load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    users.push({ fName: faker.fName() });
}

db.customers.createIndex({ fName: 1 }, { unique: true });

db.customers.insert(users);


