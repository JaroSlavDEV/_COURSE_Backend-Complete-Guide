load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 1000; i++) {
    const user = {
        name:     `${faker.fName()} ${faker.lName()}`,
        role:      'admin',
        cities:    faker.randomCities(4)
    }
    users.push(user);
}

const result = db.customers.insert(users);

db.customers.createIndex({ '$**': 'text' });

db.customers.find(
    { $text: { $search: 'Alisa -Wolftown' } },
    { score: { $meta: 'textScore' }, _id: false }
)