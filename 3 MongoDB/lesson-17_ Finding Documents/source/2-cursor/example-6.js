load('../random.js')
use users

db.customers.drop();
db.arch.drop();

// Create collection customers
db.createCollection('customers')
db.createCollection('arch')

const users = [];

for (let i = 0; i < 50; i++) {
    const customer = {
        name: {
            first: faker.fName(),  
            last: faker.lName(),
        }
    };

    users.push(customer);
}

db.customers.insert(users);

const cursor = db.customers.find({});
print('cursor', cursor.size())

// Cursor with query
const cursorWithQuery = db.customers.find({ 'name.first': /an/gi });
print('cursorWithQuery', cursorWithQuery.size())