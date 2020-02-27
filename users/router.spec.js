const request = require('supertest')
const server = require('../api/server')

describe('users router', function() {
    // if tests are running
    it('should run the tests', function() {
        expect(true).toBe(true);
    })

    describe('GET /api/users', function(){
        it('should return 200 OK', async function(){
            const res = await request(server).get('/api/users')
            
            expect(res.status).toBe(200)
        })

        it('should return an array', function(){
            return request(server)
            .get('/api/users')
            .then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            })
        })
    })

    describe('POST /api/users', function(){


        it('should return 201 CREATED', function(){
            return request(server)
            .post('/api/users')
            .send({name:"Izzy"})
            .then(res => {
                expect(res.status).toBe(201)
            })
        })

        it('should be type of json', function(){
            return request(server)
            .post('/api/users')
            .send({name:'Izzy2'})
            .then(res => {
                expect(res.type).toMatch(/json/)
                //expect(res.body).toContain({name:'Izzy2',id:3})
            })
        })

        it('should be type of json', function(){
            return request(server)
            .post('/api/users')
            .send({name:'Izzy2'})
            .then(res => {
                expect(res.body).toEqual({name:"Izzy2",id:4})
            })
        })

    })

    describe('DELETE /api/users/:id', function() {

        it('should return 200 OK', function(){
            return request(server)
            .delete('/api/users/3')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return the count correctly', function(){
            return request(server)
            .delete('/api/users/3')
            .then(res => {
                expect(res.body.length).toBe(4)
            })
        })
    })

})