const knex = require('../database/knex');
const PAYMENT_TABLE = 'payment';

const postPayment = async (tenant_id, amount, person_name, card_number, expiry, security_code) => {
    const query = knex(PAYMENT_TABLE).insert({ tenant_id, amount, person_name, card_number, expiry, security_code });
    const results = await query;
    return results;
}

const getPayments = async (tenant_id) => {
    const query = knex(PAYMENT_TABLE).where({ tenant_id });
    const results = await query;
    return results;
}

const getLandPayments = async (land_id) => {
    const query = knex(PAYMENT_TABLE).where({ land_id });
    const results = await query;
    return results;
}

module.exports = {
    postPayment,
    getPayments,
    getLandPayments
}