const request = require('supertest')
const server = require('../api/server')

describe('users router', function() {
    // if tests are running
    it('should run the tests', function() {
        expect(true).toBe(true);
    })

    describe('GET /api/users', function(){
        it('should return 200 OK', async function(){
            const res = await request(server).get('/')
            
            expect(res.status).toBe(200)
        })
    })
})