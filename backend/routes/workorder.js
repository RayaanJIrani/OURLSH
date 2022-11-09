const bodyParser = require('body-parser');
const express = require('express');
const { createWorkOrder } = require('../models/workorder');
router = express.Router();
router.use(bodyParser.json());




router.get('/:workorders?status=&description=', async (req, res, next) => {
    let text = (req.params.description);



    let status = parseInt(req.params.status);

    //let accountId = req.query.id; //Don't know whether params or body will be used

    
    //will return 404 not found if id does not exist
    let workOrders;
    if (req.query.status) {
         workOrders = await req.models.workOrders.fetchWorkOrderByStatus;
    }
    else {
         workOrders = await req.models.workOrders.fetchAllWorkOrders();
  
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

router.get('/:wo_num', async (req, res, next) => {

    let wo_num = parseInt(req.params.wo_num);
    //let accountId = req.query.id; //Don't know whether params or body will be used
    if(typeof(wo_num) !== 'number' || !wo_num)
    {
        console.log("work order number is not type Number");
        res.status(400).send();
    }
    else{
        const workOrderByID = await req.models.workorder.getworkOrderByID(wo_num);
        //will return 404 not found if id does not exist
        if(JSON.stringify(workOrderByID) == '[]')
        {
            console.log("No work order found with id ", wo_num)
            res.status(404).send();
        }
        else
        {
            res.json(workOrderByID);
        }
    }
    next();
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
