load('../random.js')
use users

db.customers.drop();

// Create collection customers
db.createCollection('customers')

const users = [];

for (let i = 0; i < 50; i++) {
    users.push({ 
        fName: faker.fName(),
        lName: faker.lName()
    });
}

db.customers.insert(users);

db.customers.find({ fName: /an/gi }, { _id: false });
print('=====================================================')
db.customers.find({ fName: /an/gi }, { _id: 0 });
print('*****************************************************')
db.customers.find({ fName: /an/gi }, { _id: 0, lName: false });
print('-----------------------------------------------------')
db.customers.find({ fName: /an/gi }, { fName: 1 });
print('-----------------------------------------------------')
db.customers.find({ fName: /an/gi }, { _id: 0, fName: 1 });

print('Count:', db.customers.countDocuments({}))

