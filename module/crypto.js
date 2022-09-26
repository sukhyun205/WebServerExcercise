const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abdefdewerdfgefdserxfderwedfeser';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할문장', 'utf8','base64');
result += cipher.final('base64');
console.log('암호화된결과: ',result);