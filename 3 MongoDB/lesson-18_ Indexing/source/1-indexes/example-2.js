load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 10; i++) {
    users.push({ fName: faker.fName() });
}

const result = db.customers.insert(users);

db.customers.createIndex({ fName: 1 });

// {
//     "createdCollectionAutomatically" : false,
//     "numIndexesBefore" : 1, ← one default index for _id
//     "numIndexesAfter" : 2, ← _id index and fName_1 index
//     "ok" : 1
// }

// List all available indexes
db.customers.getIndexes();