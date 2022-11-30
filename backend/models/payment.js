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

const getLandPayments = async (landlord_id, req) => {
    const allpayments = knex(PAYMENT_TABLE);
    const results = await allpayments;
    let x = [];
    for(i = 0; i < results.length; i++){
        let ten = req.models.tenant.fetchTenantByID(results[i].tenant_id)
        let tenres = await ten;
        if(tenres.landlord_id === landlord_id){
            x.push(results[i]);
        }
    }
    return x;
}

module.exports = {
    postPayment,
    getPayments,
    getLandPayments
}