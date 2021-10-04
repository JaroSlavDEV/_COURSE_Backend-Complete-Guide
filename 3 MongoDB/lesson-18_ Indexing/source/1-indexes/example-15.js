load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    const user = {
        name:     `${faker.fName()} ${faker.lName()}`,
        cities:    faker.randomCities(4)
    }
    users.push(user);
}

const result = db.customers.insert(users);

db.customers.createIndex({ '$**': 'text' });

db.customers.find(
    { $text: { $search: 'Wolftown Alisa' } },
    { score: { $meta: 'textScore' }, _id: false }
)