load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers');

const users = [];

for (let i = 0; i < 20; i++) {
    users.push({ 
        name: {
            first: faker.fName(),  
            last: faker.lName(),
        },
        scores: randomNumber(1, 100) % 2 === 0 ? randomNumber(1, 100) : null,
    });
}

db.customers.insert(users);

db.customers.find({});
print('=============================================')
db.customers.find({ 'scores': null });