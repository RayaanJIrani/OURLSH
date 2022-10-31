const bodyParser = require('body-parser');
const express = require('express');
router = express.Router();
router.use(bodyParser.json());

router.post('/tenant', async (req, res, next) => {
   try {
        const body = req.body;
      
        const result = await authenticateTenant(body.email, body.password);
        if(result != null){
            res.status(200).json(result);
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
       
        const result = await authenticateLandlord(body.email, body.password);
        if(result != null){
            res.status(200).json(result);//added if statement
        }
    } catch (err) {
        console.error('Failed to authenticate user:', err);
        res.status(401).json({ message: err.toString() });
    }
    next();
 })

module.exports = router;