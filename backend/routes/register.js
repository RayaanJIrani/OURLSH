const bodyParser = require('body-parser');
const express = require('express');
router = express.Router();
router.use(bodyParser.json());

//to create a tenant
router.post('/tenant', async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    
    if (email === undefined || password === undefined || first_name === undefined || last_name ===undefined){
        return res.sendStatus(400);
    }
    const registerTenant = await req.models.register.createTenant
    (email,
    password,
    first_name,
    last_name,
    );

    res.status(201).json(registerTenant);
    next();
 });
 
 //to create a landlord
 router.post('/landlord', async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password
    let first_name = req.body.first_name
    let last_name = req.body.last_name

    
    if (email === undefined || password === undefined || first_name === undefined || last_name ===undefined) {
        return res.sendStatus(400);
    }
    const registerLandlord = await req.models.register.createLandlord
    (email,
    password,
    first_name,
    last_name,
    );

    res.status(201).json(registerLandlord);
    next();
 });

 module.exports = router;