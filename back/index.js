const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.use(cors())
app.use(jsonParser)

const port = 8080

const users = [
    {
        id: 1,
        name: 'test',
        last_name: 'test',
        username: 'test',
        email: 'test@gmail.com',
        created: '2021-01-01',
        password: '12345678'
    },
    {
        id: 2,
        name: 'name1',
        last_name: 'last_name1',
        username: 'username1',
        email: 'email1@gmail.com',
        created: '2021-01-01'
    },
    {
        id: 3,
        name: 'name2',
        last_name: 'last_name2',
        username: 'username2',
        email: 'email2@gmail.com',
        created: '2021-01-02'
    },
    {
        id: 4,
        name: 'name3',
        last_name: 'last_name3',
        username: 'username3',
        email: 'email3@gmail.com',
        created: '2021-01-03'
    },
    {
        id: 5,
        name: 'name4',
        last_name: 'last_name4',
        username: 'username4',
        email: 'email4@gmail.com',
        created: '2021-01-04'
    }
];

app.post('/signup', (req, res) => {
    users.push({ ...req.body, created: new Date(), id: users.length + 1 });
    res.send({ success: true })
});

app.put('/users', (req, res) => {
    const idx = users.findIndex(user => user.id === req.body.id);
    users[idx] = req.body;

    res.send({ success: true })
});

app.delete('/users/:userId', (req, res) => {
    const idx = users.findIndex(user => user.id === req.params.userId);
    users.splice(idx, 1);

    res.send({ success: true })
});

app.post('/login', (req, res) => {
    const user = users.find(user => 
        (user.email === req.body.username || user.username === req.body.username)
         && user.password === req.body.password
    );

    if (user) {
        res.send({ success: true }); // 200 HTTP OK
    } else {
        res.sendStatus(401); // 401 HTTP UNAuthorized
    }
});

app.get('/users', (req, res) => {
    res.send(users.map(user => ({...user, password: null})));
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});