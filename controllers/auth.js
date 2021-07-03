const { response } = require('express');
//This is to active the intellisense

const createUser = ( req, res = response ) => {

    const { name, email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}

const loginUser = ( req, res = response ) => {

    const { email, password } = req.body;

    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const renewToken = ( req, res = responsees ) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}


module.exports = {
    createUser,
    loginUser,
    renewToken
}