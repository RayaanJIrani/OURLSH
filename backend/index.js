require('dotenv').config();
const express = require('express');
const tenantRoutes = require('./routes/tenant');
const landlordRoutes = require('./routes/landlord');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login' );
const workorderRoutes = require('./routes/workorder' );
const paymentRoutes = require('./routes/payment' );
const invoiceRoutes = require('./routes/invoice' );

const {createModelsMiddleware} = require('./middleware/model-middleware' );
const { authenticateJWT, authenticateWithClaims } = require('./middleware/auth-middleware');

const cors = require('cors');
const app = express();
const port = 8000;
app.use(createModelsMiddleware);

//get rid of CORS issue
app.use(cors({
    origin: '*'
}));

app.get('/health', (request, response, next) => {
    const responseBody = { status: 'up', port };
    response.json(responseBody);
    // next() is how we tell express to continue through the middleware chain
    next();
});
//tenant routes
app.use('/tenants', authenticateJWT, tenantRoutes);

//landlord routes
app.use('/landlords', authenticateJWT, landlordRoutes);

//login routes
app.use('/login', loginRoutes);

//register routes
app.use('/register', registerRoutes);

//workorder routes
app.use('/workorders', authenticateJWT, workorderRoutes);

//payment routes
app.use('/payments', authenticateJWT, paymentRoutes);

//invoice routes
app.use('/invoices', authenticateJWT, invoiceRoutes);

app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});

