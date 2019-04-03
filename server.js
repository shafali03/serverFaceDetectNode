const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'ali110614shaf',
        database: 'smartbrain'
    }
});

db.select('*').from('users').then(data => {
    console.log(data);
})


const app = express();

app.use(bodyParser.json());
app.use(cors())



app.get('/', (req, res) => {
    res.send(database.users);
})


app.get('/', (req, res) => { res.send('it is working') })
//signIn
app.post('/signin', signin.handleSignin(db, bcrypt))
//register to push to add to the user array
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
//Profile
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
//image
app.put('/image', (req, res) => { image.handleImage(req, res, db) })

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })


app.listen(3000, () => {
    console.log('apps is running on port 3000');
})



   // Send sensitive information from front end to back end using a https in a post body and with a password use bcrypt 