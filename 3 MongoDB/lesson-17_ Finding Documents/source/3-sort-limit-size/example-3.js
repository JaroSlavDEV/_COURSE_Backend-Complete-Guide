load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 10; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        orders: randomNumber(1, 10)
    });
}

db.customers.insert(users);

db.customers.find({}, { orders: true })
print('=============================DEFAULT=============================')
db.customers.find({}, { orders: true }).limit(3).skip(1);
print('=============================ASC=============================')
db.customers.find({}, { orders: true }).sort({ orders: 1 }).limit(3).skip(1);
print('=============================DESC=============================')
db.customers.find({}, { orders: true }).sort({ orders: -1 }).skip(1).limit(3);



// db.customers.find({}, { orders: true }).limit(3).skip(1);
// 1

// 2
// 3
// 4

// 5
// 6
