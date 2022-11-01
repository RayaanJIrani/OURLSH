const bodyParser = require('body-parser');
const express = require('express');
const { authenticateLandlord, authenticateTenant } = require('../models/login');
router = express.Router();
router.use(bodyParser.json());

router.post('/tenant', async (req, res, next) => {
   try {
        const body = req.body;
        const result = await authenticateTenant(req, body.email, body.password);
        if(result != null){
            res.status(200).json(result);
        }
        else
        {
            res.status(401).json("Password does not match the email given"); 
        }
   } catch (err) {
       console.error('Failed to authenticate user:', err);
       res.status(401).json({ message: err.toString() });
   }
   next();
})

router.post('/landlord', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await authenticateLandlord(req, body.email, body.password);
        if(result != null){
            res.status(200).json(result);//added if statement
        }
        else
        {
            res.status(401).json("Password does not match the email given"); 
        }
    } catch (err) {
        console.error('Failed to authenticate user:', err);
        res.status(401).json({ message: err.toString() });
    }
    next();
 })

module.exports = router;