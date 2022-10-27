const knex = require('../database/knex');
const LANDLORD_TABLE = 'landlord';

const loginFetchLandlordByEmail = async (email) => {
    //uses passed in id to get the associated tenant but only the specified columns
    const query = knex(LANDLORD_TABLE).where({ email });
    const results = await query;
    return results;
}
module.exports = {
    loginFetchLandlordByEmail
}