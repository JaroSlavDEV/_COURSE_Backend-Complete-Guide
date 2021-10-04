load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    users.push({ fName: faker.fName() });
}

const result = db.customers.insert(users);

// Creates index for the first time
db.customers.createIndex({ fName: 1 });

// List all available indexes
db.customers.getIndexes();

// Trying to create index for the second time
db.customers.createIndex({ fName: 1 });
// {
//     "numIndexesBefore" : 2,
//     "numIndexesAfter" : 2,
//     "note" : "all indexes already exist",
//     "ok" : 1
// }