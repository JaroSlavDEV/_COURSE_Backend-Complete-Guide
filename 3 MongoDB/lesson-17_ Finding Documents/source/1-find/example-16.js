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

// orders: 5
// orders: { $eq: 5 }

db.customers.find({ orders: { $eq: 5 } }, { orders: true });
print('==============================================================')
db.customers.find({ orders: 5 }, { orders: true });


