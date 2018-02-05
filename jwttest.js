
const jwt = require('jsonwebtoken');

const KEY_ID = 'act_5963ceb97cde542d000dbdb1';
const SECRET = 'W7JPAd-EaAVuQkWXBwDCkGv4';

const signJwt = function() {
    return jwt.sign({
        scope: 'account'
    },
    SECRET,
    {
        header: {
            kid: KEY_ID,
            typ: 'JWT',
            alg: 'HS256'
        }
    });
}

console.log(signJwt())


