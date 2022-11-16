const bodyParser = require('body-parser');
const express = require('express');
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
            res.json(tenantByID[0]);
        }
    }
    next();
});

module.exports = router;
