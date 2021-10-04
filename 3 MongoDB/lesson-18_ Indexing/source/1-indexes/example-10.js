load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 1000; i++) {
    const user = {
        fName: faker.fName(),
        lName: faker.lName(),
        age:   randomNumber(18, 90),
        orders: {
            product: faker.product()
        }
    }

    if (randomNumber(1, 2) % 2) {
        user.orders.count = randomNumber(1, 50)
    }

    users.push(user);
}

const result = db.customers.insert(users);

print('Documents in a collection:', db.customers.count())
print('Documents in a collection with orders.count:', db.customers.find({ 'orders.count': { $exists: true } }).count())

// creates an index for all fields
// if the field does not exists it stores null for this key
db.customers.createIndex({ 'orders.count': 1 });

// To resolve this problem look at → ../2-index-options/example-4.js