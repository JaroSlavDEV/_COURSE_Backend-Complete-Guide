use users

// Cleanup previous changes
db.customers.drop();

const getCount = () => db.customers.stats().count ? db.customers.stats().count : 0;

print('Number of documents before insert', getCount())

db.customers.insertOne({ name: 'John' });

// {
//     "acknowledged" : true,
//     "insertedId" : ObjectId("5c8a4513fc9d1f1b93b1b3b6")
// }

print('Number of documents after insert', getCount())