const express = require('express');
require('dotenv').config();


//creating express server
const app = express();

//Public directory
app.use( express.static('public'));

// Routes
app.use('/api/auth', require('./routes/auth'))


// listening requests
app.listen( process.env.PORT, () => {
    console.log('server running in port 4000')
});