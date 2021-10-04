const fs = require('fs');

const file1 = fs.readFileSync('example-1.js');
const string1 = file1.toString();

const file2 = fs.readFileSync('example-2.js');
const string2 = file2.toString();

const file3 = fs.readFileSync('example-3.js');
const string3 = file3.toString();

const content = `
	Content
	<------------>
	${string1}
	<------------>
	${string2}
	<------------>
	${string3}	
`;

console.log(content);
