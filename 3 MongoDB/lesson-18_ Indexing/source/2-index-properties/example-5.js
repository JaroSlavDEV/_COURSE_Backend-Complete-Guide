// Resolve problem from ../1-indexes/example-10
load('../random.js')
use users

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

// equality expressions (i.e. field: value or using the $eq operator),
// $exists: true expression,
// $gt, $gte, $lt, $lte expressions,
// $type expressions,
// $and operator at the top-level only
db.customers.createIndex({ scores: 1 }, {
    partialFilterExpression: { scores: { $lt: 50 } } 
});

// Works for
db.customers.find({ scores: { $lt: 25 } }) // 50--25--0

// But

// Does not work for
db.customers.find({ scores: { $gt: 25 } }) // 25--50--100