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

db.customers.find({ orders: { $in: [2, 7] } }, { orders: true });

// Get documents by IDs
// OK ←
// db.customers.find({ _id: { $in: ['5c8fed3b2fb8a2c5429bce76', '5c8fed3b2fb8a2c5429bce78'] } }, { orders: true });
// Not OK ←
// db.customers.findOne({ _id: '5c8fed3b2fb8a2c5429bce76' }, { orders: true });
// db.customers.findOne({ _id: '5c8fed3b2fb8a2c5429bce78' }, { orders: true });


