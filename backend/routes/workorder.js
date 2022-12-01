const bodyParser = require('body-parser');
const express = require('express');
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
    let tenant = req.body.tenant;
    let descrip = req.body.descrip;

    if (tenant === undefined || descrip === undefined){
        return res.sendStatus(400);
    }
    let tenantobj = req.models.tenant.fetchTenantByID(tenant);
    const tenantobject = await tenantobj;
    if(!tenantobject.landlord_id)
    {
        console.log("not landlord linked")
        res.sendStatus(400);
    }
    else
    {
        const makeWorkOrder = await req.models.workorder.createWorkOrder(
            tenantobject,
            descrip
        )
        console.log("New work order made,", makeWorkOrder)
        const workOrderByID = await req.models.workorder.getworkOrderByID(makeWorkOrder[0]);
        res.status(201).json(workOrderByID);
        next();
    }
});

router.put('/:id', async (req, res, next) => {
    let wo_num = req.params.id;
    const updateWorkOrder = await req.models.workorder.updateWorkOrder(req.body.resolved, req.body.description, wo_num);
        res.json(updateWorkOrder);
        next();
});

module.exports = router;
