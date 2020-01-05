require('dotenv').config()
const express=require('express'),
      massive=require('massive'),
      session=require('express-session'),
      auth_ctrl=require('./auth_controller')
const {SERVER_PORT, SESSION_SECRET,CONNECTION_STRING} = process.env

const app=express()
app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: 1000 * 60 * 60
    }
}))

massive(CONNECTION_STRING).then((db) => {
    app.set('db',db)
    console.log('database set!')
    app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))
    })

// app.post('/auth/login', auth_ctrl.login)
app.post('/auth/regist', auth_ctrl.register)
