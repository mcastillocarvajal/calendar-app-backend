const { response } = require('express');
//This is to active the intellisense
const bcrypt = require('bcryptjs');
const User = require('../models/user');


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

        // Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );
    
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

const loginUser = async( req, res = response ) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if ( !user ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'Your email is not registered'
            })
        }

        // Validate passwords

        const validPass = bcrypt.compareSync( password, user.password );

        if ( !validPass ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'Your credentials are incorrect. Please try again!'
            })
        }

        // JWT

        res.json({
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