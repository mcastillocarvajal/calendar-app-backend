const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config')


//creating express server
const app = express();

// db
dbConnection();

//Public directory
app.use( express.static('public'));

// Parse body
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'))


// listening requests
app.listen( process.env.PORT, () => {
    console.log('server running in port 4000')
});