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

print('=============================DEFAULT=============================')
db.customers.find({}, { orders: true }).limit(3);
print('=============================ASC=============================')
db.customers.find({}, { orders: true }).sort({ orders: 1 }).limit(3);
print('=============================DESC=============================')
db.customers.find({}, { orders: true }).sort({ orders: -1 }).limit(3);


