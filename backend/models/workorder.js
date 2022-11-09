const knex = require('../database/knex');
const WORK_ORDER_TABLE = 'work_order';

   
   
   

const res = require("express/lib/response");
const { fetchTenantByID } = require('./tenant');

const createWorkOrder = async (property, tenant_id, descrip) => {
    let tenantobj = fetchTenantByID(tenant_id);

    const result = await knex(WORK_ORDER_TABLE).insert({
        description: descrip,
        tenant_id: tenant_id,
        prop_id: property,
        status: 1,
        date: new Date(),
        resolved: false,
        importance: 1,
        land_id: tenantobj.landlord_id,
        invoice_id: 0
    });
    return result;
}

   const getworkOrderByID = async (wo_num) => {
      //uses passed in id to get the associated work order but only the specified columns
       const query = knex(WORK_ORDER_TABLE).where({ wo_num })
       .select("description",
               "status",
               "date",
               "resolved",
               "importance",
               "tenant_id",
               "invoice_id",
               "prop_id",
               "land_id");

       const results = await query;
       return results;

   }
   const fetchAllWorkOrders = async () =>{
      const query = knex(WORK_ORDER_TABLE);
      const results = await query;
      return results;
      }

   const fetchWorkOrderByStatus = async (status) =>{
      const query = knex(WORK_ORDER_TABLE).where({status});
      const results = await query;
      return results;
   }

   const updateWorkOrder = async (resolved, property, description, tenant) =>{
      const query = knex(work).update({resolved, property, description, tenant}).where({id});
      const results = await query;
      return results;
   }
module.exports = {
   fetchAllWorkOrders,
   fetchWorkOrderByStatus,
   createWorkOrder,
   getworkOrderByID,
   updateWorkOrder

}