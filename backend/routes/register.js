const bodyParser = require('body-parser');
const express = require('express');
router = express.Router();
router.use(bodyParser.json());

//check if email entered is valid
const checkIfValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("Is valid email:", re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
};

//to create a tenant
router.post('/tenant', async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;

    if (!checkIfValid(email) || password === undefined || first_name === undefined || last_name === undefined) {
        return res.sendStatus(406);
    }
    const tenants = await req.models.tenant.loginFetchTenantByEmail(email);
    console.log(tenants)
    if (tenants.length === 0) {
        console.log(`No tenants matched the email: ${email}, creating account`);
        const registerTenant = await req.models.register.createTenant
            (email,
                password,
                first_name,
                last_name);

        res.status(201).json(registerTenant);
        next();
    }
    else if(tenants.length > 0)
    {
        console.log(`Tenant account already created with email address = ${email}`);
        return res.sendStatus(400);
    }
    else
    {
        console.log(`Unknown error has occured`);
        return res.sendStatus(401);
    }
});

//to create a landlord
router.post('/landlord', async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password
    let first_name = req.body.first_name
    let last_name = req.body.last_name

    if (!checkIfValid(email) || password === undefined || first_name === undefined || last_name === undefined) {
        return res.sendStatus(406);
    }

    const landlords = await req.models.landlord.loginFetchLandlordByEmail(email);
    if (landlords.length === 0) {
        console.log(`No landlords matched the email: ${email}, creating account`);
        const registerLandlord = await req.models.register.createLandlord
            (email,
                password,
                first_name,
                last_name);

        res.status(201).json(registerLandlord);
        next();
    }
    else if(landlords.length > 0)
    {
        console.log(`Landlord account already created with that email address = ${email}`);
        return res.sendStatus(400);
    }
    else
    {
        console.log(`Unknown error has occured`);
        return res.sendStatus(401);
    }


});

module.exports = router;