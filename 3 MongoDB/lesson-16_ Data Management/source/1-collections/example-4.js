use users
// Cleanup previous changes
db.customers.drop(); // drops the collection customers

// Create collection customers
db.createCollection('customers')

print('==========================')
print('associated DB name:', db.customers.getDB())
print('==========================')
