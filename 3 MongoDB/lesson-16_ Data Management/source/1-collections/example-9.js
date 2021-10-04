use users
// Cleanup previous changes
db.customers.drop(); // drops the collection customers

// Create collection customers
db.createCollection('customers')

print('=============STATS START=============')
db.customers.latencyStats()
print('=============STATS END=============\n')

print('=============STATS START PRETTY=============')
db.customers.latencyStats().pretty()
print('=============STATS END PRETTY=============')
// latency in microseconds
// ops total number of operations performed on the collection since startup