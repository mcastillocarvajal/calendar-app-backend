const { response } = require('express');
//This is to active the intellisense
const User = require('../models/user')


const createUser = async( req, res = response ) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        if ( user ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'Your email is already registered'
            })
        }

        user = new User( req.body );
    
        await user.save();
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })

    } catch ( error ) {

        console.log( error )
        res.status(500).json({
            ok: false,
            msg: 'Please contact the administrator'
        })
    }

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