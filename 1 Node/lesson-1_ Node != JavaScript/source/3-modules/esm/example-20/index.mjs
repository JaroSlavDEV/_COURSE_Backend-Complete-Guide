import { a } from './source';

// CommonJS — undefined
console.log(a);

// ESM — SyntaxError: The requested module './source' does not provide an export named 'a'
console.log(a);
