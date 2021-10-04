load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 25; i++) {
    users.push({ name: faker.fName() });
}

db.customers.insert(users);

// Вернуть все документы коллекции customers
db.customers.find();
// SELECT * FROM customers
