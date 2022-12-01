const bodyParser = require('body-parser');
const express = require('express');
const { authenticateMultipleClaims } = require('../middleware/auth-middleware');
router = express.Router();
router.use(bodyParser.json());



router.post('/', async (req, res, next) => {
    console.log("starting post payment")
    const tenant_id = req.body.tenant_id
    let auth = await authenticateMultipleClaims(['tenant', `${tenant_id}`], req, res)

    if(res.status == 200)
    {
        console.log("creds are ok, here is data", req.data)
        const amount = req.body.amount
        const person_name = req.body.person_name
        const card_number = req.body.card_number
        const expiry = req.body.expiry
        const security_code = req.body.security_code

        //make sure fields are valid
        if (tenant_id === undefined || amount === undefined || person_name === undefined 
            || card_number === undefined || expiry === undefined || security_code === undefined) {
                console.log(tenant_id, amount, person_name, card_number, expiry, security_code)
            return res.sendStatus(406);
        }

        const payment = await req.models.payment.postPayment(tenant_id, amount, person_name, card_number, expiry, security_code);
        // res.json(payment);
        res.sendStatus(201);
        next();
    }
    else
    {   
        res.sendStatus(res.status);
    }
});

//Not my idea for an endpoint

router.get('/tenants/:id', async (req, res, next) => {
    const tenant_id = req.params.id
    console.log("getting tenant", tenant_id)
    const tenantByID = await req.models.tenant.fetchTenantByID(tenant_id);
    console.log("checking creds")
    let auth = await authenticateMultipleClaims(['tenant', `${tenant_id}`], req, res)
    //
    //lets either tenant with id matching access or the landlord linked to that tenant
    if(res.status != 200)
    {
        console.log("checking landlord")
        let auth = await authenticateMultipleClaims(['landlord', `${tenantByID.landlord_id}`], req, res)
    }
    if(res.status == 200)
    {
        console.log("getting payments")
        const payments = await req.models.payment.getPayments(tenant_id);
        res.json(payments);
        // res.sendStatus(200);
        next();
    }
    else
    {   
        res.sendStatus(res.status);
    }
});

router.get('/landlords/:id', async (req, res, next) => {
    const params = req.params;
    const land_id = params.id
    console.log("getting landlord,", land_id)
    const landById = await req.models.landlord.fetchLandlordByID(land_id);
    console.log("done getting land")
    let auth = await authenticateMultipleClaims(['landlord', `${land_id}`], req, res)

    if(res.status == 200)
    {
        const payments = await req.models.payment.getLandPayments(land_id, req);
        res.json(payments);
        next();
    }
    else
    {   
        res.sendStatus(res.status);
    }
});

module.exports = router;