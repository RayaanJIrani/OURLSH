const jwt = require('jsonwebtoken');
const Landlord = require('../models/landlord');
const Tenant = require('../models/tenant');
const accessTokenSecret = 'not-a-password';
const bcrypt = require('bcrypt');

const authenticateTenant = async (req, email, password) => {
    const tenants = await req.models.tenant.loginFetchTenantByEmail(email);
    console.log('Results of users query', tenants);
    if (tenants.length === 0) {
        console.error(`No tenants matched the email: ${email}`);
        return null;
    }
    const tenant = tenants[0];
    const validPassword = await bcrypt.compare(password, tenant.password);
    if (validPassword) {

        let auth = jwt.sign({ ...tenants[0], claims: ['landlord'] }, accessTokenSecret);
        return auth;
    }
    return null;
}
const authenticateLandlord = async (req, email, password) => {
    const landlords = await req.models.landlord.loginFetchLandlordByEmail(email);
    console.log('Results of users query', landlords);
    if (landlords.length === 0) {
        console.error(`No landlords matched the email: ${email}`);
        return null;
    }
    const landlord = landlords[0];
    const validPassword = await bcrypt.compare(password, landlord.password);
    if (validPassword) {

        let auth = jwt.sign({ ...landlords[0], claims: ['landlord'] }, accessTokenSecret);
        return auth;
    }
    return null;
}

module.exports = {
    authenticateTenant,
    authenticateLandlord
};