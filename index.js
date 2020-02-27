const express = require('express')

const server = express();
const usersRouter = require('./users/router')


server.use(express.json());
server.use('/api/users',usersRouter)

server.get('/', (req,res) => {
    res.json({message:'API Working'})
})

const port = 5000;
server.listen(port, () => console.log(`Server Listening on ${port}`))

