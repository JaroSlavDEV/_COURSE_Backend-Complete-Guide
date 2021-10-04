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

// $gte
db.customers.find({ orders: { $not: { $lt: 3 }} }, { orders: true });
print('=================================================================')
// $gt
db.customers.find({ orders: { $not: { $lte: 3 }} }, { orders: true });


