load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 10; i++) {
    users.push({
        fName: faker.fName(),
        lName: faker.lName(),
        orders: faker.randomProducts()
    });
}

const result = db.customers.insert(users);

// Index for nested fields
db.customers.createIndex({ 'orders.name': 1 });
// {
//     "_id" : ObjectId("5c937baf9ce28a3bd2d1a952"),
//     "fName" : "Nathan",
//     "lName" : "Green",
//     "orders" : [
//             {
//                     "name" : "Pea", ← index for this filed
//                     "count" : 18
//             },
//             {
//                     "name" : "Potatoes", ← and for this
//                     "count" : 18
//             },
//             {
//                     "name" : "Oranges", ← and for this
//                     "count" : 30
//             }
//     ]
// }

db.customers.find({ 'orders.name': 'Oranges' })

// List all available indexes
db.customers.getIndexes();