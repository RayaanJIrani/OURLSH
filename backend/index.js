require('dotenv').config();
const express = require('express');
const tenantRoutes = require('./routes/tenant' );
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login' );
const {createModelsMiddleware} = require('./middleware/model-middleware' );

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
//tenants routes
app.use('/tenants', tenantRoutes);

//login routes
app.use('/login', loginRoutes);

//register routes
app.use('/register', registerRoutes);

app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});