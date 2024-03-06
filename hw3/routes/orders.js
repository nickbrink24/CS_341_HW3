/* Nick Brink */
/* HW 4 */
var express = require('express');
var router = express.Router();
var query = require('./dbms');  // import the database functions

var data =
[
    {
        topping : "cherry",
        quantity : "NULL"
    },
    {
        topping : "chocolate",
        quantity : "NULL"
    },
    {
        topping : "plain",
        quantity : "NULL"
    }
];


/* POST users listing. */
router.post('/', function(req, res, next) {
    // issue the SQL query based on the given month
    var month = req.body.month.toUpperCase();

    var cherrySQL = 'SELECT * FROM ORDERS WHERE MONTH = "' + month + '";'
    query.dbquery(cherrySQL, function(err, result) {
        // counters for the order
        var cherryCount = 0;
        var chocolateCount = 0;
        var plainCount = 0;

        result.forEach(function (arrayItem) {
            var x = arrayItem;
            if ((x.TOPPING.localeCompare("cherry")) == 0) {
                cherryCount++;
            } else if ((x.TOPPING.localeCompare("chocolate")) == 0) {
                chocolateCount++;
            } else if ((x.TOPPING.localeCompare("plain")) == 0) {
                plainCount++;
            }
        });

        //console.log(cherryCount);
        //console.log(chocolateCount);
        //console.log(plainCount);

        // add the order counts to the data array
        data[0].quantity = cherryCount;
        data[1].quantity = chocolateCount;
        data[2].quantity = plainCount;

        // return the data
        res.json(data);
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(data);
});

module.exports = router;
