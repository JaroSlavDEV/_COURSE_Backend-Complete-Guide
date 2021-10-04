load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 150; i++) {
    users.push({ 
        product: faker.product(),
        user:    faker.fName(),
        count:   randomNumber(1, 10)
    });
}

db.customers.insert(users);

db.customers.aggregate(
    [
        { $match: { product: {$in: [ 'Oranges', 'Apples', 'Bananas' ]} } },
        { $group : { _id : '$product', total_ordered: {$sum : '$count'} } },
        { $sort: { total_ordered: 1 } }
    ],
    {
        // useful for quickly returning a cursor 
        // or failure message 
        // without doing significant server-side work
        cursor: { 
            batchSize: 0 
        }
    }
);
