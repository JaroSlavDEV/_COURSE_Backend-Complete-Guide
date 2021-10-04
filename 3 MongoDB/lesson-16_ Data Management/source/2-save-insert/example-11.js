use users

// Cleanup previous changes
db.customers.drop();

const { insertedId } = db.customers.insertOne({name: 'John'});

print(insertedId.getTimestamp()) // Date object — Thu Mar 14 2019 15:02:18 GMT+0200 (EET)
print(insertedId.toString()) // string — ObjectId("5c8a50da9b857989c443552d")
print(insertedId.valueOf()) // string — 5c8a50da9b857989c443552d