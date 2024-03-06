/* Nick Brink */
/* HW 5 */
var express = require('express');
var router = express.Router();
var query = require('./dbms');  // import the database functions

var data =
[
    {
        quantity : "NULL"
    },
    {
        notes : "NULL"
    },
    {
        topping : "NULL"
    }
];

/* POST users listing. */
router.post('/', function(req, res, next) {
    // issue the SQL query based on the given data
    var quantity = req.body.q;
    var notes = req.body.n;
    var topping = req.body.t.toLowerCase();
    var id = 0;

    var idQuery = 'SELECT * FROM ORDERS';
    query.dbquery(idQuery, function(err, result) {
        // make sure the ID is unique
        id = result.length;

        // after getting the id, insert into the table
        var insert = 'INSERT INTO ORDERS VALUES ("' + id + '", "JUL", "17", "' + quantity + '", "' + topping + '", "' + notes + '");'
        query.dbquery(insert, function(err, result) {
            // nothing here
        });

        res.json(data);
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(data);
});

module.exports = router;
