use users
// Cleanup previous changes
db.classbook.drop(); // drops the collection classbook
db.gradebook.drop(); // drops the collection gradebook

// Create collection classbook
db.createCollection('classbook') // → { "ok" : 1 }
db.getCollectionNames() // → [ "classbook" ]
db.classbook.renameCollection('gradebook') // → { "ok" : 1 }
db.getCollectionNames() // → [ gradebook" ]