load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

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

const cursor = db.customers.find({});
const firstDocument = cursor.hasNext() ? cursor.next() : null;
const secondDocument = cursor.hasNext() ? cursor.next() : null;

// db.customers.insert({
//     name: {
//         first: faker.fName(),  
//         last: faker.lName(),
//     }
// });

print(tojson(firstDocument))
print('==========================================')
print('Documents to process:', cursor.objsLeftInBatch()) // 8