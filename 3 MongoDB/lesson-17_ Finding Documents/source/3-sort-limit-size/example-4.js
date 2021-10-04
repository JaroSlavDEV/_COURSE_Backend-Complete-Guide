load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 10; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName(),
        orders: randomNumber(1, 10)
    });
}

db.customers.insert(users);

const itemsPerPage = 3
const pages = Math.ceil(db.customers.countDocuments({}) / itemsPerPage); // 3.1 // 4

for (let page = 0; page < pages; page++) {
    print(`=============================Page: ${page+1}=============================`)

    const cursor = db.customers.find({}, { orders: true })
        .sort({ orders: 1 })
        .limit(itemsPerPage)
        .skip(page * itemsPerPage); // Step 1 = 0
    
    print(tojson(cursor.toArray()));
}

