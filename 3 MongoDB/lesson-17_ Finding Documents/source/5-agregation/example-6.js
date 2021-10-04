load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 100; i++) {
    users.push({ 
        product: faker.product(),
        user:    faker.fName(),
        count:   randomNumber(1, 10)
    });
}

db.customers.insert(users);

const distinct = db.customers.distinct('user');

print('Unique users:', distinct.length);
