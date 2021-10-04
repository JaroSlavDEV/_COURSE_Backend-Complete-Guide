load('../random.js')
use users

// need to run from terminal
// mongoimport '../restaurants.json' -d users -c restaurants;
// mongoimport '../neighborhoods.json' -d users -c neighborhoods;

// db.restaurants.createIndex({ location: "2dsphere" })
// db.neighborhoods.createIndex({ geometry: "2dsphere" })

// print('======================restaurants=========================')
// db.restaurants.findOne()
// print('======================neighborhoods=========================')
// db.neighborhoods.findOne()

// Find nearby restaurants
const neighborhood = db.neighborhoods.findOne({
    geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903 ] } } } 
});

// print('======================total restaurants=========================')
db.restaurants.find({ location: { $geoWithin: { $geometry: neighborhood.geometry } } }).count()
// print('======================restaurant names=========================')
db.restaurants.find({ location: { $geoWithin: { $geometry: neighborhood.geometry } } }, { _id: false, name: true })

// 1. Ищем область в которую входить точка
// 2. Извлекаем координаты области → geometry 
// 3. Если нам нужно найти заведения входящие в эту область → $geoWithin