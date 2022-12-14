const knex = require('../database/knex');
const WORK_ORDER_TABLE = 'work_order';

const res = require("express/lib/response");

const createWorkOrder = async (tenantobject, descrip) => {
   const result = await knex(WORK_ORDER_TABLE).insert({
      description: descrip,
      tenant_id: tenantobject.id,
      status: 1,
      date: new Date(),
      resolved: false,
      importance: 1,
      land_id: tenantobject.landlord_id,
      invoice_id: 0,
      address: tenantobject.address
   });
   return result;
}

const getworkOrderByID = async (wo_num) => {
   //uses passed in id to get the associated work order but only the specified columns
   const query = knex(WORK_ORDER_TABLE).where({ wo_num })

   const results = await query;
   return results[0];

}

const fetchTenWorkOrders = async (tenant_id) => {
   console.log("getting tenant wo", tenant_id)
   const query = knex(WORK_ORDER_TABLE).where({tenant_id});
   const results = await query;
   return results;
}

const fetchLandWorkOrders = async (land_id) => {
   const query = knex(WORK_ORDER_TABLE).where({land_id});
   const results = await query;
   return results;
}

const fetchWorkOrderByStatus = async (resolved) => {
   const query = knex(WORK_ORDER_TABLE).where({ resolved });
   const results = await query;
   return results;
}

const updateWorkOrder = async (resolved, description, wo_num) => {
   if(resolved !== undefined)
   {
      const query = knex(WORK_ORDER_TABLE).update({ resolved }).where({ wo_num });
      const results = await query;
   }
   if(description !== undefined)
   {
      const query = knex(WORK_ORDER_TABLE).update({ description }).where({ wo_num });
      const results = await query;
   }
   const query = knex(WORK_ORDER_TABLE).where({ wo_num });
   const results = await query;
   return results;
}
module.exports = {
   fetchLandWorkOrders,
   fetchWorkOrderByStatus,
   createWorkOrder,
   getworkOrderByID,
   updateWorkOrder,
   fetchTenWorkOrders
}