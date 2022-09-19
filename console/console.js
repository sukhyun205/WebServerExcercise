const string = 'sukhyun';
const num = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key:'value'
        }
    }
}

console.time('전체 시간');
console.log(string, num, boolean, obj);
console.error('에러메세지는 console.error');

console.table([{name:'kwon', birth:'2000'},{name:'suk', birth:'2001'}])