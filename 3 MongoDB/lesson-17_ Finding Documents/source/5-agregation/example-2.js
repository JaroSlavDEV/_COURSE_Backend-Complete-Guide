load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 50; i++) {
    users.push({ 
        product: faker.product(),
        user:    faker.fName(),
        count:   randomNumber(1, 10)
    });
}

db.customers.insert(users);

db.customers.find({ product: {$in: [ 'Oranges', 'Apples' ]} });
print('=========================================================')
db.customers.aggregate([
    { $match: { product: {$in: [ 'Oranges', 'Apples' ]} } },
    { $group: { _id: '$product', total_ordered: {$sum : '$count'} } }
]);

// Group 1
// { "product" : "Oranges", "user" : "Hershel", "count" : 10 }
// { "product" : "Oranges", "user" : "Evans", "count" : 1 }
// { "product" : "Oranges", "user" : "Katarina", "count" : 6 }
// { _id: "Oranges", total_ordered: 17 }

// Group 2
// { "product" : "Apples", "user" : "Camilla", "count" : 10 }
// { "product" : "Apples", "user" : "Logan", "count" : 6 }
// { _id: "Apples", total_ordered: 16 }
