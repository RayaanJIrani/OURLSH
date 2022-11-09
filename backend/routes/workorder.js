const bodyParser = require('body-parser');
const express = require('express');
router = express.Router();
router.use(bodyParser.json());



router.get('/:workorders?status=&description=', async (req, res, next) => {
    let text = (req.params.description);
    // const splitDescription = text.split("");
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

router.get('/:workorder/:id', async (req, res, next) => {

})

router.post('/workorder')

module.exports = router;