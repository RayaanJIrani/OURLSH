const bodyParser = require('body-parser');
const express = require('express');
const { authenticateMultipleClaims } = require('../middleware/auth-middleware');
router = express.Router();
router.use(bodyParser.json());



router.get('/:id', async (req, res, next) => {
    let accountId = parseInt(req.params.id);
    //let accountId = req.query.id; //Don't know whether params or body will be used
    if(typeof(accountId) !== 'number' || !accountId)
    {
        console.log("account_id is not type Number");
        res.status(400).send();
    }
    else{
        const tenantByID = await req.models.tenant.fetchTenantByID(accountId);
        //will return 404 not found if id does not exist
        if(JSON.stringify(tenantByID) == '[]')
        {
            console.log("No user found with id", accountId)
            res.status(404).send();
        }
        else
        {
            res.json(tenantByID);
        }
    }
    next();
});

router.put('/:id', async (req, res, next) => {
    let id = req.params.id
    console.log("yuh?")
    let auth = await authenticateMultipleClaims(['tenant', `${id}`], req, res)
    console.log(res.status)
    if (res.status === 200)
    {
        const tenants = await req.models.tenant.loginFetchTenantByEmail(req.body.email);
        if(tenants.length > 0)
        {
            console.log("Cannot update, email is already in use")
            res.sendStatus(403);
        }
        else
        {
            const updatetenant = await req.models.tenant.updateTenantById(id, req.body.email, req.body.first_name, req.body.last_name, req.body.photo);
            res.json(updatetenant[0]);
            next();
        }
    }
    else
    {   
        res.sendStatus(res.status);
    }
});

router.get('/', async (req, res, next) => {
    const params = req.query;
    console.log("params = ", req.query);
    const landlord_id = params.landlord
    if(landlord_id === undefined)
    {
        const getAllTenants = await req.models.tenant.getAllTenants();
        res.json(getAllTenants);
        next();
    }
    else{
        const getAllTenantsUnderLandlord = await req.models.tenant.getTenantsByLandlord(landlord_id);
        res.json(getAllTenantsUnderLandlord);
        next();
    }

});

module.exports = router;