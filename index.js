const express = require('express')

const server = express();

server.use(express.json());

let users = [
    {
        id:0,
        name:"Milo Rastgoo"
    },
    {
        id:1,
        name:"Ali Rastgoo"
    }
]

let id = users[users.length-1].id

server.get('/', (req,res) => {
    res.json({message:'API Working'})
})

server.post('/api/users', (req,res) => {
    const user = req.body
    user.id = id + 1
    add(user)
    res.status(201).json(users[users.length - 1])
})

server.get('/api/users', (req,res) => {
    res.status(200).json(users)
})

server.delete('/api/users/:id',(req,res) => {
    const id = req.params.id
    users = [
        ...users.filter(item => (item.id != id && item))
    ]
    res.status(200).json(users)
})

const port = 5000;
server.listen(port, () => console.log(`Server Listening on ${port}`))

function add(user){
    return users.push(user)
}