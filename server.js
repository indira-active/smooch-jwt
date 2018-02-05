const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const KEY_ID = 'app_5a70141be964c6003fe08afc';
const SECRET = 'hIraqmK_mDq53XembMweqa86';
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

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



app.get('/', (req,res)=>{

	const userId = req.query.userId;

	res.json({jwt:signJwt(userId)})

	});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);