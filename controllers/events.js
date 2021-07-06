const { response } = require('express');


const getEvent = async( req, res = response) => {

    res.json({
        ok: true,
        msg: 'getEvent'
    })

}

const createEvent = async( req, res = response) => {

    console.log( req.body );

    res.json({
        ok: true,
        msg: 'createEvent'
    })

}

const updateEvent = async( req, res = response) => {

    res.json({
        ok: true,
        msg: 'updateEvent'
    })

}

const deleteEvent = async( req, res = response) => {

    res.json({
        ok: true,
        msg: 'deleteEvent'
    })

}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}