load('../random.js')
use users

db.customers.drop();
db.arch.drop();

// Create collection customers
db.createCollection('customers')
db.createCollection('arch')

const users = [];

for (let i = 0; i < 10; i++) {
    const customer = {
        name: {
            first: faker.fName(),  
            last: faker.lName(),
        }
    };

    users.push(customer);
}

db.customers.insert(users);

// disable default 10 minutes timeout
const cursor = db.customers.find({}).noCursorTimeout(); // ← danger

for (let i = 0; i < 10; i++) {
    if(i === 2) {
        cursor.close();
        break;
    }
    print(tojson(cursor.next()))
}
