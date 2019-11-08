const express = require('express');
const router = express.Router();
const schemas = require ('../model/Schema');

router.route('/route').post((req, res) => {
    let route = new schemas(req.body);
    route.save()
    .then ( () => {
        console.log('account registered')
    })
    .catch ( err => {
        console.log(err)
    })

})

module.exports = router