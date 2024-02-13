var express = require('express');
var router = express.Router();

data =
[
    {
        topping : "cherry",
        quantity : "2"
    },
    {
        topping : "plain",
        quantity : "6"
    },
    {
        topping : "chocolate",
        quantity : "3"
    }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;