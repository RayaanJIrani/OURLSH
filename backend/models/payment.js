const knex = require('../database/knex');
const PAYMENT_TABLE = 'payment';

const postPayment = async (tenant_id, invoice_id, amount, person_name, card_number, expiry, security_code) => {
    const query = knex(PAYMENT_TABLE).insert({ tenant_id, invoice_id, amount, person_name, card_number, expiry, security_code });
    const results = await query;
    return results;
}

module.exports = {
    postPayment
}