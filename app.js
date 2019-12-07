const express = require('express');
const bodyParser = require('body-parser');

//Init app
const app = express();

//Setup app
app.use(bodyParser.urlencoded({extended : true}));

//Routers
const tagsRouter = require('./routes/tags');
const recipeRouter = require('./routes/recipes');

//Route Filters
app.use('/tags', tagsRouter.routes);
app.use('/recipes', recipeRouter.routes);

//Ignore favicon
app.get('/favicon.ico', (req, res, next) => {
    next();
});

//Generic response
app.get('/', (req, res, next) => {
    res.send('Welcome to the Tyler API... Enter at your own risk (James sucks at COD)');
});

//Server listen
app.listen(3000, function(){
    console.log('API listening on port 3000');
});

//Recipe
/*
    Recipe
    1. Name
    2. Description
    3. Images **
    4. Author **
    5. Ingredients **
    6. Steps **
    7. Instructions **
*/ 


