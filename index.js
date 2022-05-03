const express = require('express');
//routing to the apiRoutes folder and using everything inside it
const apiRoutes = require('./routes/apiRoutes');
//routing to the htmlRoutes folder and using everything inside it
const htmlRoutes = require('./routes/htmlRoutes');

//use process.env.PORT - use whichever PORT the server wants to use
const PORT = process.env.PORT || 3001;
const app = express();

//Important Order:  1. express.json, 2. express.urlencoded, 3. express.static('public'), 3. routes, 4. listen
//express.json()
app.use(express.json());

//express.urlencoded({extemded: true})
app.use(express.urlencoded({ extended: true }));

// express.static('public')
app.use(express.static('public'));

//routes - put '/api' before '/' to elimate errors
app.use('/api', apiRoutes);     //do not add this line until the apiRoutes has been set up.  You will get an error when testing.
app.use('/', htmlRoutes);       // the '/' is for front-end 

//listen 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})