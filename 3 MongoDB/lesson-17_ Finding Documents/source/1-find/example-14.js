load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 20; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        orders: randomNumber(1, 10)
    });
}

db.customers.insert(users);

db.customers.find({ orders: { $nin: [2, 3, 4, 7, 8] } }, { orders: true });


