load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers');

const users = [];

for (let i = 0; i < 20; i++) {
    users.push({ 
        name: {
            first: {
                en: faker.fName()
            },  
            last: faker.lName(),
        },
        scores: randomNumber(1, 100),
    });
}

db.customers.insert(users);

db.customers.find({ 'name.first.en': /^D/ })