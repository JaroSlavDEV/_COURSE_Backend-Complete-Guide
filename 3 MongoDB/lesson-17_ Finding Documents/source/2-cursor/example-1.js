load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 10; i++) {
    const customer = {
        name: {
            first: faker.fName(),  
            last: faker.lName(),
        }
    };

    users.push(customer);
}

const result = db.customers.insert(users);

// db.customers.find({});
const cursor = db.customers.find({});
// no output anymore
