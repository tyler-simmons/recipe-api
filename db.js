const mysql = require('mysql');

const sqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'recipeuser',
    password: 'password',
    database: 'recipe_project'
    //insecureAuth: true
});

module.exports = sqlConn;