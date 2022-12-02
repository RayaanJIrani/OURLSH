const knex = require('../database/knex');
const INVOICE_TABLE = 'invoice';

const addInvoice = async (amount, date, payment_type, what_for, land_id, tenant_id) => {

    //uses passed in id to get the associated tenant but only the specified columns
    const query = knex(INVOICE_TABLE).insert({amount, date, payment_type, what_for, land_id, tenant_id});
    const results = await query;
    return results;
}

const getInvoices = async (land_id, tenant_id) => {
    let query = knex(INVOICE_TABLE)
    let results = await query;
    let ten
    if (land_id !== undefined) {
        query = knex(INVOICE_TABLE).where({ land_id });
        results = await query
    }
    if (tenant_id !== undefined) {
        ten = knex(INVOICE_TABLE).where({ tenant_id });
        let ten_results = await ten;
        let return_vec = []
        for (i in ten) {
            if (results.find(ten_results[i]) !== -1) {
                return_vec.push(ten_results[i])
            }
        }
        results = return_vec;
    }
    return results;
}

const getInvoiceByID = async (id) => {
    let query = knex(INVOICE_TABLE).where({id})
    let results = await query;
    return results
}

module.exports = {
    addInvoice,
    getInvoices,
    getInvoiceByID
}