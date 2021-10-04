use users

// Cleanup previous changes
db.customers.drop();

const { insertedId } = db.customers.insertOne({name: 'John'});

print('Type of _id:', typeof insertedId)

// ObjectId = 12 bytes
// a 4-byte value representing the seconds since the Unix epoch,
// a 5-byte random value
// a 3-byte counter, starting with a random value.