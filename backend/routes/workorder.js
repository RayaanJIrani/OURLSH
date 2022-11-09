const bodyParser = require('body-parser');
const express = require('express');
const { createWorkOrder } = require('../models/workorder');
router = express.Router();
router.use(bodyParser.json());


router.get('/', async (req, res, next) => {
    console.log("params = ", req.query)
    let text = (req.query.description);

    let status = parseInt(req.query.status);

    //will return 404 not found if id does not exist
    let workOrders;
    if (req.query.status) {
         workOrders = await req.models.workorder.fetchWorkOrderByStatus(status);
    }
    else {
         workOrders = await req.models.workorder.fetchAllWorkOrders();
    }
    let newWorkOrders = [];
    if(!text)
    {
        newWorkOrders=workOrders
    }
    else
    {
        for(i = 0; i < workOrders.length; i++){
            if(workOrders[i].description.search(text) !== -1){
                newWorkOrders.push(workOrders[i]);
            }
        }
    }
    console.log("returned list =", newWorkOrders)
    res.status(200).json(newWorkOrders);

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
