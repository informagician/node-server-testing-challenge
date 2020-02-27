const express = require('express')
const server = express();
const usersRouter = require('../users/router')


server.use(express.json());
server.use('/api/users',usersRouter)

server.get('/', (req,res) => {
    res.json({message:'API Working'})
})

module.exports = server