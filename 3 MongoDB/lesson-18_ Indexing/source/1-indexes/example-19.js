load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 10000; i++) {
    users.push({
        fName: faker.fName(),
        lName: faker.lName(),
        age: randomNumber(18, 90)
    });
}

const result = db.customers.insert(users);

db.customers.createIndex({ age: 1 }); // 48Kb - for 5k records, 20Kb - for 1k records
db.customers.createIndex({ fName: 1 }); // 40Kb - for 5k records, 20Kb - for 1k records
db.customers.createIndex({ fName: 1, lName: -1 }); // 76Kb - for 5k records, 28Kb - for 1k records
db.customers.createIndex({ someUnusedField: 1 }); // 36Kb - for 5k records, 20Kb - for 1k records
db.customers.createIndex({ secondField: 1 }); // 36Kb - for 5k records, 20Kb - for 1k records
db.customers.createIndex({ wtField: 1 }); // 36Kb - for 5k records, 20Kb - for 1k records

print('=========================1=============================')
print('Number of indexes:', db.customers.getIndexes().length)
db.customers.dropIndex({ wtField: 1 });
db.customers.dropIndex({ secondField: 1 });
db.customers.dropIndex('someUnusedField_1'); // drop index by name
print('=========================2=============================')
print('Number of indexes:', db.customers.getIndexes().length)