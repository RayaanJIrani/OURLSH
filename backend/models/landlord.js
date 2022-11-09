const knex = require('../database/knex');
const LANDLORD_TABLE = 'landlord';

const fetchLandlordByID = async (id) => {
    //uses passed in id to get the associated tenant but only the specified columns
     const query = knex(LANDLORD_TABLE).where({ id })
     .select("id",
             "email",
             "first_name",
             "last_name");

     const results = await query;
     return results;
 }

const loginFetchLandlordByEmail = async (email) => {
    //uses passed in id to get the associated tenant but only the specified columns
    const query = knex(LANDLORD_TABLE).where({ email });
    const results = await query;
    return results;
}
module.exports = {
    fetchLandlordByID,
    loginFetchLandlordByEmail
}