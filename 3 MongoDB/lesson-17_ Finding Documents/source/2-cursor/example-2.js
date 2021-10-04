load('../random.js')
use users

db.customers.drop();
db.reports.drop();

// Create collection customers
db.createCollection('customers')
db.createCollection('reports')

const users = [];

for (let i = 0; i < 30; i++) {
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

while (cursor.hasNext()) {
    const { _id, name: { first, last } } = cursor.next();

    db.reports.insert({ message: `Customer '${first} ${last}' was registered with id: ${_id.valueOf()}` })
}

// db.reports.find({}, { _id: false })

