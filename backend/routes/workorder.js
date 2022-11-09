const bodyParser = require('body-parser');
const express = require('express');
const { createWorkOrder } = require('../models/workorder');
router = express.Router();
router.use(bodyParser.json());




router.get('/', async (req, res, next) => {
    let text = (req.params.description);



    let status = parseInt(req.params.status);

    //let accountId = req.query.id; //Don't know whether params or body will be used

    
    //will return 404 not found if id does not exist
    let workOrders;
    if (req.query.status) {
         workOrders = await req.models.workorders.fetchWorkOrderByStatus;
    }
    else {
         workOrders = await req.models.workorders.fetchAllWorkOrders();
  
    }
    let newWorkOrders = [];
    for(i = 0; i < workOrders.length; i++){
        if(workOrders[i].find(text)){
            newWorkOrders.append(workOrders[i]);
            
        }
    }
    res.status(200).json(newWorkOrders);

    next();
});

router.get('/:id', async (req, res, next) => {

    
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

router.put('/:id', async (req, res, next) => {
    const updateWorkOrder = await req.models.workorders.updateWorkOrder(req.body.resolved, req.body.property, req.body.description,req.body.tenant);
        res.json(updateWorkOrder);
        next();
});

module.exports = router;
