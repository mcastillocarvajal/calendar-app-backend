/*
    AUTH ROUTES
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

router.post(
    '/new', 
    [ //middlewares
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be 6+ chars long').isLength({ min: 6 }),
        validateFields
    ], 
    createUser 
);

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be 6+ chars long').isLength({ min: 6 }),
        validateFields
    ],
    loginUser 
);

router.get('/renew', renewToken );

module.exports = router;