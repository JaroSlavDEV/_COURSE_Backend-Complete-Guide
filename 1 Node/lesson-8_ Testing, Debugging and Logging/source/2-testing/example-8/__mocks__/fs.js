// fs.access
// fs.readFile
const fs = jest.genMockFromModule('fs');

fs.readFile = (file, cb) => {
    cb(null, 'success');
};

module.exports = fs;
