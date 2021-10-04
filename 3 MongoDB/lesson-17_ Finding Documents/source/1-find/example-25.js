load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers');

const users = [];

for (let i = 0; i < 10; i++) {
    const customer = {
        name: {
            first: faker.fName(),  
            last: faker.lName(),
        }
    };

    if (randomNumber(1, 100) % 2 === 0) {
        customer.scores = randomNumber(1, 100);
    }

    users.push(customer);
}

db.customers.insert(users);

db.customers.find({})
print('==================================================================================')
db.customers.find({ 'scores': { $exists: true } })
print('----------------------------------------------------------------------------------')
db.customers.find({ 'scores': { $exists: false } })