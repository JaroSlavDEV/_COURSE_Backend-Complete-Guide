load('../random.js')
use users

db.customers.drop();
db.arch.drop();

// Create collection customers
db.createCollection('customers')
db.createCollection('arch')

const users = [];

for (let i = 0; i < 5; i++) {
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

cursor.forEach((doc) => {
    print(`Save to arch db ${doc._id.valueOf()}`);
    db.arch.insert(doc);
});

print('===================================')
db.customers.find()
print('===================================')
db.arch.find()


