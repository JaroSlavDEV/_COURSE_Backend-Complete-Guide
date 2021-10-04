use users
db.createCollection('customers'); // → { "ok" : 1 }
db.createCollection('scores'); // → { "ok" : 1 }
show collections // returns collection names as a strings
db.getCollectionNames() // returns collection names as an array