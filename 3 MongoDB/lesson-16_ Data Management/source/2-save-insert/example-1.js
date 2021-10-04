use users

// Cleanup previous changes
db.customers.drop();

const getCount = () => db.customers.stats().count ? db.customers.stats().count : 0;

print('Number of documents before insert', getCount())

db.customers.insert({ name: 'John' });

// WriteResult({ "nInserted" : 1 })

print('Number of documents after insert', getCount())