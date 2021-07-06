const { response } = require('express');
const Event = require('../models/event');

const getEvent = async( req, res = response) => {

    res.json({
        ok: true,
        msg: 'getEvent'
    })

}

const createEvent = async( req, res = response) => {

    const event = new Event( req.body );

    try {

        event.user = req.uid

        const savedEvent = await event.save();

        res.status(400).json({
            ok: true,
            event: savedEvent
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }


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