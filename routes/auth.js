const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const cors = require('cors')
const User = require('../models/User')

var corsOptions = {
    origin: 'https://kawacer.netlify.app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/', cors(corsOptions), function(req, res) {
    const body = req.body;

    console.log(body)

    User.findOne({email: body.username, password: body.password}, (err, user) => {
        if(err) return res.sendStatus(401);
        if(user){
            var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
            res.send({token, user});
        } else {
            res.sendStatus(401);
        }
    })
});

module.exports = router
