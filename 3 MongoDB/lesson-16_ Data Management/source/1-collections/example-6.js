use users
// Cleanup previous changes
db.customers.drop(); // drops the collection customers

// Create collection customers
db.createCollection('customers')

print('=============STATS START=============')
print(db.customers.storageSize(), 'bytes')
print('=============STATS END=============')
