const express = require('express');
const app = express();
const env = require('node-env-file');
const jwt = require('jsonwebtoken');
env(__dirname + '/.env');
const KEY_ID = process.env.KEY_ID;
const SECRET = process.env.SECRET;

const PORT = 8080;

const signJwt = function(userId) {
    return jwt.sign({
        scope: 'appUser',
        userId: userId
    },
    SECRET,
    {
        header: {
            alg: 'HS256',
            typ: 'JWT',
            kid: KEY_ID
        }
    });
}



app.get('/cs', (req,res)=>{

	const userId = req.query.userId;

	res.json({jwt:signJwt(userId)})

	});


app.listen(PORT);

console.log(`Running on Port:${PORT}`);