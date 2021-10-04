use users

// Cleanup previous changes
db.customers.drop();

const getCount = () => db.customers.stats().count ? db.customers.stats().count : 0;

print('Number of documents before insert', getCount())

db.customers.insertMany([{ name: 'John' }, { name: 'Andrey' }, { name: 'Andrey' }, { name: 'Andrey' }]);

// {
//     "acknowledged" : true,
//     "insertedIds" : [
//             ObjectId("5c8a4541e1c8dc33d7e8bfdd"),
//             ObjectId("5c8a4541e1c8dc33d7e8bfde")
//     ]
// }

print('Number of documents after insert', getCount())