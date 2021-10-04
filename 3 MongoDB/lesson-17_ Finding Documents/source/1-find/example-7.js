load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 50; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName()
    });
}

db.customers.insert(users);

db.customers.find({ fName: /an/gi });
print('==============================')
db.customers.findOne({ fName: /an/gi });
