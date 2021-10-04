load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    const user = {
        fName:     faker.fName(),
        lName:     faker.lName(),
        favorites: faker.randomWords(2)
    }
    users.push(user);
}

const result = db.customers.insert(users);

db.customers.createIndex({ favorites: 'text' });

// 'I like Oranges'.includes('Oranges')
db.customers.find({ $text: { $search: 'Orange' } })