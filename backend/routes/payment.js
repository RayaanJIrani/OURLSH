const bodyParser = require('body-parser');
const express = require('express');
const { } = require('../middleware/auth-middleware');
router = express.Router();
router.use(bodyParser.json());



router.post('/', async (req, res, next) => {
    const tenant_id = req.data.tenant_id
    let auth = await authenticateMultipleClaims(['tenant', `${tenant_id}`], req, res)

    if(res.status == 200)
    {
        const invoice_id = req.data.invoice_id
        const amount = req.data.amount
        const person_name = req.data.person_name
        const card_number = req.data.card_number
        const expiry = req.data.expiry
        const security_code = req.data.security_code

        //make sure fields are valid
        if (tenant_id === undefined || invoice_id === undefined || amount === undefined || person_name === undefined 
            || card_number === undefined || expiry === undefined || security_code === undefined) {
                console.log(tenant_id, invoice_id, amount, person_name, card_number, expiry, security_code)
            return res.sendStatus(406);
        }

        const payment = await req.models.payment.postPayment(tenant_id, invoice_id, amount, person_name, card_number, expiry, security_code);
        res.json(payment);
        res.sendStatus(201);
        next();
    }
    else
    {   
        res.sendStatus(res.status);
    }
});

module.exports = router;