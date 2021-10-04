load('../random.js')
use users

db.customers.drop();
db.arch.drop();

// Create collection customers
db.createCollection('customers');
db.createCollection('arch');

const users = [];

for (let i = 0; i < 5; i++) {
    const customer = {
        name: {
            first: faker.fName(),  
            last: faker.lName(),
        }
    };

    users.push(customer);
}

const result = db.customers.insert(users);

const cursor = db.customers.find({});

const customers = cursor.toArray();

print('Array?', Array.isArray(customers));

print('===================================')
print(customers[0]);
print('===================================')
print(JSON.stringify(customers[0], null, 4));
print('===================================')
print(tojson(customers[0]));