load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

let created = Date.now();

for (let i = 0; i < 1000; i++) {
    const user = {
        name:     `${faker.fName()} ${faker.lName()}`,
        created:  new Date(created + 2000 * i),
        modified: new Date(created + 2000 * i),
    }
    users.push(user);
}

const result = db.customers.insert(users);

// Creates TTL index
// Restrictions:
// 1. TTL indexes are a single-field indexes. Compound indexes do not support TTL and ignore the expireAfterSeconds option
// 2. The _id field does not support TTL indexes
// 3. You cannot create a TTL index on a capped collection because MongoDB cannot remove documents from a capped collection
// 4. You cannot use createIndex() to change the value of expireAfterSeconds of an existing index
// 5. If a non-TTL single-field index already exists for a field, you cannot create a TTL index
db.customers.createIndex({ 'modified': 1 }, { expireAfterSeconds: 5 });

// Simulate interval
let counter = 0;

while(counter < 40) {
    print(counter, new Date(), db.customers.find().count());
    sleep(5000);
    counter++;
}