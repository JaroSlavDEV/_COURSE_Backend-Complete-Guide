load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('orders')

const orders = [];

for (let i = 0; i < 50; i++) {
    orders.push({ 
        name:  faker.product(),
        user:  faker.fName(),
        count: randomNumber(1, 10)
    });
}

db.orders.insert(orders);

db.orders.aggregate([{ $group : { _id : "$user", total_user_orders : { $sum : 1 } } }]);
