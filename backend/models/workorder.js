const knex = require('../database/knex');
const WORK_ORDER_TABLE = 'work_order';
   
   
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
module.exports = {
   fetchAllWorkOrders,
   fetchWorkOrderByStatus
}