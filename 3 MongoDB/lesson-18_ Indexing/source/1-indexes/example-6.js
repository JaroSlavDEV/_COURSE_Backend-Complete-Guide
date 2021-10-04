load('../random.js')
use users

// need to run from terminal
// mongoimport '../restaurants.json' -d users -c restaurants;
// mongoimport '../neighborhoods.json' -d users -c neighborhoods;

db.restaurants.createIndex({ location: "2dsphere" });
db.neighborhoods.createIndex({ geometry: "2dsphere" });

// print('======================restaurants=========================')
// db.restaurants.findOne()
// print('======================neighborhoods=========================')
// db.neighborhoods.findOne()

// Find nearby point
const result = db.neighborhoods.findOne({ 
    geometry: { 
        $geoIntersects: { $geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903 ] } } 
    } 
});

print(result._id)