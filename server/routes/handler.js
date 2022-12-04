const express = require('express');
const { Schema } = require('mongoose');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/tweet', (req, res) => {
    const str = [{
        "name": "Shay Jin",
        "msg": "Hello world",
        "username": "shay_0419"
    }];
    
    res.end(JSON.stringify(str));
})

router.get('/add', async (req, res) => {
    const name = {name: "Ella Lee"};
    const newUser = new Schemas.Name(name);

    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('created');
            res.end('New user created');
        });
    } catch(err) {
        console.log(err);
        res.end('not added');
    }
});

router.post('/post', async (req, res) => {
    const suggestion = req.body.input;

    const newSuggestion = new Schemas.Suggestion({
        content: suggestion
    });

    try {
        await newSuggestion.save( (err, result) => {
            if (err) res.redirect('/');
            res.redirect('/');
            res.end();
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;