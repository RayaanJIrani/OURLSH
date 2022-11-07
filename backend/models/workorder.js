const knex = require('../database/knex');
const WORK_ORDER_TABLE = 'work_order';
const res = require("express/lib/response");

const createWorkOrder = async (property, tenant, descrip) => {
    const result = await knex(WORK_ORDER_TABLE).insert({
        description: descrip,
        tenant_id: tenant,
        prop_id: property
    });
    return result;
}
   const workOrderByID = async (wo_num) => {
      //uses passed in id to get the associated tenant but only the specified columns
       const query = knex(WORK_ORDER_TABLE).where({ wo_num })
       .select("id",
               "email",
               "first_name",
               "last_name",
               "prop_id",
               "landlord_id");

       const results = await query;
       return results;
   }

   //for loginpurposes
   const loginFetchTenantByEmail = async (email) => {
      //uses passed in id to get the associated tenant but only the specified columns
       const query = knex(TENANT_TABLE).where({ email })
       .select("email",
               "first_name",
               "last_name",
               "password");
               
       const results = await query;
       return results;
   }
module.exports = {
   fetchTenantByID,
   loginFetchTenantByEmail,
   createWorkOrder
}