const express = require('express');
const app = express();
const env = require('node-env-file');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
env(__dirname + '/.env');
const http = require('http')
const KEY_ID = process.env.node_env === 'production'?process.env.KEY_ID:process.env.KEY_ID1;
const SECRET = process.env.node_env === 'production'?process.env.SECRET:process.env.SECRET1;
const PORT = 8080;
const signJwt = require('./jwt');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
      extended: false
  }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req,res)=>{

	const userId = req.query.userId;

	res.json({jwt:signJwt(userId)})

	});

const port = process.env.PORT || PORT;
app.listen(port);