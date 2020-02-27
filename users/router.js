const router = require('express').Router();

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


router.post('/', (req,res) => {
    const user = req.body
    user.id = id + 1
    add(user)
    console.log(users)
    res.status(201).json(users[users.length-1])
})

router.get('/', (req,res) => {
    res.status(200).json(users)
})

router.delete('/:id',(req,res) => {
    const id = req.params.id
    users = [
        ...users.filter(item => (item.id != id && item))
    ]
    res.status(200).json(users)
})

module.exports = router;

function add(user){
    return users.push(user)
}