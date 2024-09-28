const express = require('express')
const bodyParser = require('body-parser');
const { users } = require('./models/database.js');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.get('/', async function (req, res) {
    const users = await users.create({ username: 'value' , email: 'value@gmail.com', password:'value123'});
    console.log(req.body)
    res.send('Hello World')
  })

app.listen(3000)


