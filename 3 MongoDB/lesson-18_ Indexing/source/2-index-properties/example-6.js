// Resolve problem from ../1-indexes/example-10
load('../random.js')
use users

db.contacts.drop();
db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 500; i++) {
    const user = {
        fName: faker.fName(),
        lName: faker.lName()
    }

    if (randomNumber(1, 2) % 2) {
        user.scores = randomArray(randomNumber(1, 5), 0, 100)
    }

    users.push(user);
}

const result = db.customers.insert(users);

// The same 
db.customers.createIndex(
    { name: 1 },
    { partialFilterExpression: { scores: { $exists: true } } }
)

// AS
db.customers.createIndex({ scores: 1 }, { sparse: true });


db.customers.find({ scores: { $lt: 25 } })