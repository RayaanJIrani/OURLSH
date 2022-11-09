const bodyParser = require('body-parser');
const express = require('express');
const { createWorkOrder } = require('../models/workorder');
router = express.Router();
router.use(bodyParser.json());

router.get('/:workorders?status=&wo_num=', async (req, res, next) => {
    let workOrderNum = parseInt(req.params.wo_num);
    let status = parseInt(req.params.status);

    //let accountId = req.query.id; //Don't know whether params or body will be used
    if(typeof(workOrderNum) !== 'number' || !workOrderNum)
    {
        console.log("work order number is not a number, please try again");
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

router.get('/:workorder/:id', async (req, res, next) => {

    
});

router.post('/', async (req, res, next) => {
    let prop_id = req.body.prop_id;
    let tenant = req.body.tenant;
    let descrip = req.body.descrip;

    if (prop_id === undefined || tenant === undefined || descrip === undefined){
        return res.sendStatus(400);
    }

    const makeWorkOrder = await createWorkOrder(
        prop_id,
        tenant,
        descrip
    )
    res.status(201).json(makeWorkOrder);
    next();
});

module.exports = router;
