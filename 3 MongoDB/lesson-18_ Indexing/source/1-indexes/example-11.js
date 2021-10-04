load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

const users = [];

for (let i = 0; i < 1000; i++) {
    const user = {
        fName: faker.fName(),
        lName: faker.lName()
    }
    users.push(user);
}

const result = db.customers.insert(users);

db.customers.createIndex({ fName: 1 });

// db.customers.find({ fName: 'Aracely' }) → Index → Aracely → documents 

// Will use the collection to retrieve data
// db.customers.find({ fName: 'Aracely' });
print('============================================================')
// Will NOT use the collection to retrieve data
// db.customers.find({ fName: 'Aracely' }, { fName: true, _id: false });