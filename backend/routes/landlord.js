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
        console.log("account_id is not type Number or is 0");
        res.status(400).send();
    }
    else{
        const tenantByID = await req.models.landlord.fetchLandlordByID(accountId);
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
    let auth = await authenticateMultipleClaims(['landlord', `${id}`], req, res)
    console.log(res.status)
    if (res.status === 200)
    {
        const landlords = await req.models.landlord.loginFetchLandlordByEmail(req.body.email);
        if(landlords.length > 0)
        {
            console.log("Cannot update, email is already in use")
            res.sendStatus(403);
        }
        else
        {
            const updatelandlord = await req.models.landlord.updateLandlordById(id, req.body.email, req.body.first_name, req.body.last_name, req.body.photo);
            res.json(updatelandlord);
            next();
        }
    }
    else
    {   
        res.sendStatus(res.status);
    }
});

module.exports = router;