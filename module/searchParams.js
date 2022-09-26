const {URL} = require('url');
const myURL = new URL('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log('searchParams:', myURL.searchParams);
console.log(myURL.searchParams.getAll('category'));
console.log(myURL.searchParams.has('page'));