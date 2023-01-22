

const add = (n , s) => n+s;

const [ , , n, s] = process.argv;

console.log(add(+n, +s));
