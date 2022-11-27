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
    return results[0];
}


const loginFetchLandlordByEmail = async (email) => {
    //uses passed in id to get the associated tenant but only the specified columns
    const query = knex(LANDLORD_TABLE).where({ email });
    const results = await query;
    return results;
}

const updateLandlordById = async (id, email, first_name, last_name, photo) => {

    if (email !== undefined) {
        const query = knex(LANDLORD_TABLE).update({ email }).where({ id });
        const results = await query;
    }
    if (first_name !== undefined) {
        const query = knex(LANDLORD_TABLE).update({ first_name }).where({ id });
        const results = await query;
    }
    if (last_name !== undefined) {
        const query = knex(LANDLORD_TABLE).update({ last_name }).where({ id });
        const results = await query;
    }
    if (photo !== undefined) {
        const query = knex(LANDLORD_TABLE).update({ photo }).where({ id });
        const results = await query;
    }
    const query = knex(LANDLORD_TABLE).where({ id });
    const results = await query;
    return results;
}

module.exports = {
    fetchLandlordByID,
    loginFetchLandlordByEmail,
    updateLandlordById
}