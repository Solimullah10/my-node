const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'hasina', email: 'hasinal@gmail.com', phone: '01780222233' },
    { id: 2, name: 'sefalin', email: 'sefalin@gmail.com', phone: '01780222233' },
    { id: 3, name: 'asma', email: 'asma@gmail.com', phone: '01780222233' },
    { id: 4, name: 'hasna', email: 'hasna@gmail.com', phone: '01780222233' },
    { id: 5, name: 'firoza', email: 'firoza@gmail.com', phone: '01780222233' },
    { id: 6, name: 'last user', email: 'last@gmail.com', phone: '01780222233' },
]

app.get('/', (req, res) => {
    res.send('hello word')
})

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {

        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    // console.log(user)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log(`The new node port ${port}`)
})