load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 50; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        orders: randomNumber(1, 10)
 
    });
}

db.customers.insert(users);

db.customers.find({ orders: { $gt: 3, $lt: 6 } }, { orders: true });
