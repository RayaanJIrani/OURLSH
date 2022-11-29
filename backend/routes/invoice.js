const bodyParser = require('body-parser');
const express = require('express');
const { authenticateMultipleClaims } = require('../middleware/auth-middleware');
router = express.Router();
router.use(bodyParser.json());

router.get('/:id', async (req, res, next) => {
    const params = req.query;
    console.log("params = ", req.query);
    const landlord_id = params.landlord
    const tenant_id = params.tenant
    const getInvoices = await req.models.invoice.getInvoices(landlord_id, tenant_id);
    res.json(getInvoices);
    next();
});

router.post('/', async (req, res, next) => {
    const land_id = req.body.land_id

    let auth = await authenticateMultipleClaims(['landlord', `${land_id}`], req, res)
    console.log(res.status)
    if (res.status === 200) {

        const amount = req.body.amount
        const date = req.body.date
        const payment_type = req.body.payment_type
        const what_for = req.body.what_for
        const prop_id = req.body.prop_id
        const tenant_id = req.body.tenant_id
        if (amount === undefined || date === undefined || payment_type === undefined || what_for === undefined || land_id === undefined || prop_id === undefined || tenant_id === undefined) {
            console.log("Field was undefined")
            console.log(amount, date, payment_type, what_for, land_id, prop_id, tenant_id)
            res.sendStatus(401);
        }
        else {
            const newInvoice = await req.models.invoice.addInvoice(amount, date, payment_type, what_for, land_id, prop_id, tenant_id);
            res.json(newInvoice);
            res.sendStatus(201);
            next();
        }
    }
    else {
        res.sendStatus(res.status);
    }
});