use users
// Cleanup previous changes
db.customers.drop(); // drops the collection customers

// Create collection customers
db.createCollection('customers')

print('=============STATS START EMPTY COLLECTION=============')
print(db.customers.dataSize(), 'bytes');
print('=============STATS END EMPTY COLLECTION=============\n')

db.customers.insert({ name: 'John' }) // → WriteResult({ "nInserted" : 1 })

print('=============STATS START NON EMPTY COLLECTION=============')
print(db.customers.dataSize(), 'bytes');
print('=============STATS END NON EMPTY COLLECTION=============\n')