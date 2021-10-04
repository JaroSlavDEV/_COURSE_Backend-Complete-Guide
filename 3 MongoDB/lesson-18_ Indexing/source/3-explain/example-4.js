load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    const user = {
        fName:     faker.fName(),
        lName:     faker.lName(),
        cities:    faker.randomCities(4)
    }
    users.push(user);
}

const result = db.customers.insert(users);

db.customers.createIndex({ fName: 1 });

// Explain query but does not actually remove the documents
db.customers.explain({ queryPlanner: 'verbose' }).remove({ fName: 'Alisa' })