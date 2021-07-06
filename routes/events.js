/*
    AUTH ROUTES
    host + /api/events
*/

const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt')
const { getEvent, updateEvent, createEvent, deleteEvent } = require('../controllers/events');

const router = Router();

// Allows to apply the JWT validation to all routers below this line
router.use( validateJWT );


router.get('/', getEvent );

router.post('/', createEvent );

router.put('/:id', updateEvent );

router.delete('/:id', deleteEvent );

module.exports = router;

