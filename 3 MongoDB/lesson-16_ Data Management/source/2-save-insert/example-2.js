use users

// Cleanup previous changes
db.customers.drop();

const getCount = () => db.customers.stats().count ? db.customers.stats().count : 0;

print('Number of documents before insert', getCount())

const users = [];

for (let i = 0; i < 1000; i++) {
    users.push({ name: `John${i}` })
}

db.customers.insert([{ name: 'John' }, { name: 'Andrey' }, { name: 'Julia' }]);
db.customers.insert(users);

// BulkWriteResult({
//     "writeErrors" : [ ],
//     "writeConcernErrors" : [ ],
//     "nInserted" : 3,
//     "nUpserted" : 0,
//     "nMatched" : 0,
//     "nModified" : 0,
//     "nRemoved" : 0,
//     "upserted" : [ ]
// })

print('Number of documents after insert', getCount())