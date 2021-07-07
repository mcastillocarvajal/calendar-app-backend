/*
    AUTH ROUTES
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');
const { getEvent, updateEvent, createEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Allows to apply the JWT validation to all routers below this line
router.use( validateJWT );


router.get('/', getEvent );

router.post(
    '/',
    [
        check( 'title', 'Title is required').not().isEmpty(),
        check( 'start', 'Start date is required').custom( isDate ),
        check( 'end', 'End date is required').custom( isDate ),
        validateFields
    ],
    createEvent 
);

router.put(
    '/:id',
    [
        check( 'title', 'Title is required').not().isEmpty(),
        check( 'start', 'Start date is required').custom( isDate ),
        check( 'end', 'End date is required').custom( isDate ),
        validateFields
    ],
    updateEvent );

router.delete('/:id', deleteEvent );

module.exports = router;

