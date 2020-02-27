const express = require('express')

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.json({message:'API Working'})
})


const port = 5000;
server.listen(port, () => console.log(`Server Listening on ${port}`))