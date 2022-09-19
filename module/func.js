const {odd, even} = require('./var');

checkOddOrEven = (num) =>  {
    if(num%2 != 0){
        return odd
    }
    else{
        return even
    }
}

module.exports = checkOddOrEven;

console.log(checkOddOrEven(10));
// console.time("시간측정");