load('../random.js')
use users
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 10; i++) {
    users.push({ fName: faker.fName() });
}

const result = db.customers.insert(users);

// List all available indexes
db.customers.getIndexes();

// There is always index for _id field.
// [
//     {
//             "v" : 2,
//             "key" : {
//                     "_id" : 1
//             },
//             "name" : "_id_",
//             "ns" : "users.customers"
//     }
// ]