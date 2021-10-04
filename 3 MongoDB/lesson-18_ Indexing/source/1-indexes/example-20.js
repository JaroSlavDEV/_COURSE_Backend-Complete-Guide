load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 100; i++) {
    users.push({
        fName: faker.fName(),
        lName: faker.lName(),
        age: randomNumber(18, 90)
    });
}

const result = db.customers.insert(users);

db.customers.createIndex({ age: 1 });

db.customers.dropIndex({ age: 1 });
// { "nIndexesWas" : 2, "ok" : 1 }
// If we will drop not existed index
db.customers.dropIndex({ age: 1 });
// {
//     "ok" : 0,
//     "errmsg" : "can't find index with key: { age: 1.0 }",
//     "code" : 27,
//     "codeName" : "IndexNotFound"
// }

// If we will drop default _id index
db.customers.dropIndex('_id_');
// {
//     "ok" : 0,
//     "errmsg" : "cannot drop _id index",
//     "code" : 72,
//     "codeName" : "InvalidOptions"
// }