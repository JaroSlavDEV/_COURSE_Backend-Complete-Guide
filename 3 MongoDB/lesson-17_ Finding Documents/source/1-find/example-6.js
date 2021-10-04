load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName()
    });
}

db.customers.insert(users);

// AND
db.customers.find({ fName: /an/gi, lName: /ie/gi }, { _id: false });

print('Count:', db.customers.countDocuments({}))

