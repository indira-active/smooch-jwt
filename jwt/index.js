const jwt = require('jsonwebtoken');
const KEY_ID = process.env.node_env === 'production'?process.env.KEY_ID:process.env.KEY_ID1;
const SECRET = process.env.node_env === 'production'?process.env.SECRET:process.env.SECRET1;
/** @function
 * @name signJwt
 * will use the SECRET and KEY_ID to create a unique jwt for the smooch instantiation
 * first set of characters up until the first period is unique. rest of the characters are
 * different per method call*/
function signJwt(userId){
    const result = jwt.sign({
            scope: 'appUser',
            userId: userId
        },
        SECRET, {
            header: {
                alg: 'HS256',
                typ: 'JWT',
                kid: KEY_ID
            }
        });
        return result;
}
module.exports = signJwt;