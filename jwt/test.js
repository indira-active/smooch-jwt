const signJwt = require('./index');
const err = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFwcF81YTcwMTQxYmU5NjRjNjAwM2ZlMDhhZmMifQ.eyJzY29wZSI6ImFwcFVzZXIiLCJ1c2VySWQiOiJqd2p3anciLCJpYXQiOjE1MTk2MjA2NzB9.-8mDO-0tjIqglNV_ESDDOuZOIWueAPKwhPOaOmuvpIo"
const assert = require('assert');
const nJwt = require('njwt')
describe('index',function(){
	  describe('Jwt1', function(){
	    const testCase = "awilliams1995";
	    it(`should return a particular string with the user ${testCase}`, function(){
	      const actualValue = signJwt(testCase);
	      const verified = nJwt.verify(actualValue,process.env.SECRET);
	     return assert.deepEqual(testCase,verified.body.userId)
	    });
	});
	  describe('Jwt2', function(){
	    const testCase = "test2";
	    it(`should return a particular string with the user ${testCase}`, function(){
	      const actualValue = signJwt(testCase);
	      const verified = nJwt.verify(actualValue,process.env.SECRET);
	     return assert.deepEqual(testCase,verified.body.userId)
	    });
	});
	  describe('Jwt3', function(){
	    const testCase = "test3";
	    it(`should return a particular string with the user ${testCase}`, function(){
	      const actualValue = signJwt(testCase);
	      const verified = nJwt.verify(actualValue,process.env.SECRET);
	     return assert.deepEqual(testCase,verified.body.userId)
	    });
	});
    describe('Jwt4', function(){
        const testCase = "test4";
        it(`${testCase} should not equal the verified body of a jwt signed with the userId jwjwjw`, function(){
            const actualValue = err;
            const verified = nJwt.verify(actualValue,process.env.SECRET);
            return assert.notEqual(testCase,verified.body.userId)
	    });
	});
});
