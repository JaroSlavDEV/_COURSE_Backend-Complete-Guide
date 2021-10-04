load('../random.js')
use users

db.customers.drop();
db.createCollection('customers')

db.customers.explain().help()
// Explainable operations
//         .aggregate(...) - explain an aggregation operation
//         .count(...) - explain a count operation
//         .distinct(...) - explain a distinct operation
//         .find(...) - get an explainable query
//         .findAndModify(...) - explain a findAndModify operation
//         .group(...) - explain a group operation
//         .remove(...) - explain a remove operation
//         .update(...) - explain an update operation
// Explainable collection methods
//         .getCollection()
//         .getVerbosity()
//         .setVerbosity(verbosity)

db.collection.explain().find().help()
// Explainable operations
//         .aggregate(...) - explain an aggregation operation
//         .count(...) - explain a count operation
//         .distinct(...) - explain a distinct operation
//         .find(...) - get an explainable query
//         .findAndModify(...) - explain a findAndModify operation
//         .group(...) - explain a group operation
//         .remove(...) - explain a remove operation
//         .update(...) - explain an update operation
// Explainable collection methods
//         .getCollection()
//         .getVerbosity()
//         .setVerbosity(verbosity)
// Explain query methods
//         .finish() - sends explain command to the server and returns the result
//         .forEach(func) - apply a function to the explain results
//         .hasNext() - whether this explain query still has a result to retrieve
//         .next() - alias for .finish()
// Explain query modifiers
//         .addOption(n)
//         .batchSize(n)
//         .comment(comment)
//         .collation(collationSpec)
//         .count()
//         .hint(hintSpec)
//         .limit(n)
//         .maxTimeMS(n)
//         .max(idxDoc)
//         .min(idxDoc)
//         .readPref(mode, tagSet)
//         .showDiskLoc()
//         .skip(n)
//         .sort(sortSpec)