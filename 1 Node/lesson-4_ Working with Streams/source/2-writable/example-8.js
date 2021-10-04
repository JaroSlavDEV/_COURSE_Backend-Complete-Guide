const fs = require('fs');
const rs = fs.createReadStream('./data/countries.json');
const ws = fs.createWriteStream('./data/countries.json.back');

rs.pipe(ws);

// fs.readFile('./data/countries.json', (error, data) => {
//     fs.writeFile('./data/countries.json.back', data);
// });
