const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config')


//creating express server
const app = express();

// db
dbConnection();

//cors
app.use( cors() );

//Public directory
app.use( express.static('public'));

// Parse body
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// listening requests
app.listen( process.env.PORT, () => {
    console.log('server running in port 4000')
});