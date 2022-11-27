const knex = require('../database/knex');
const TENANT_TABLE = 'tenant';

const fetchTenantByID = async (id) => {
   //uses passed in id to get the associated tenant but only the specified columns
   const query = knex(TENANT_TABLE).where({ id })
      .select(
         "id",
         "email",
         "first_name",
         "last_name",
         "prop_id",
         "landlord_id");

   const results = await query;
   return results[0];
}

//for loginpurposes
const loginFetchTenantByEmail = async (email) => {
   //uses passed in id to get the associated tenant but only the specified columns
   const query = knex(TENANT_TABLE).where({ email }).select(
      "id",
      "email",
      "first_name",
      "last_name",
      "password"
   );
   const results = await query;
   return results;
}


const updateTenantById = async (id, email, first_name, last_name, photo) => {

   if (email !== undefined) {
      const query = knex(TENANT_TABLE).update({ email }).where({ id });
      const results = await query;
   }
   if (first_name !== undefined) {
      const query = knex(TENANT_TABLE).update({ first_name }).where({ id });
      const results = await query;
   }
   if (last_name !== undefined) {
      const query = knex(TENANT_TABLE).update({ last_name }).where({ id });
      const results = await query;
   }
   if (photo !== undefined) {
      const query = knex(TENANT_TABLE).update({ photo }).where({ id });
      const results = await query;
   }
   const query = knex(TENANT_TABLE).where({ id });
   const results = await query;
   return results;
}

const getTenantsByLandlord = async (landlord_id) => {
   const query = knex(TENANT_TABLE).where({ landlord_id }).select(
      "id",
      "email",
      "first_name",
      "last_name",
      "prop_id",
      "landlord_id");
   console.log(`Grabbing all tenants with landlord id = ${landlord_id}...`);
   console.log(`I have the tenants with landlord id = ${landlord_id} -`);
   const results = await query;
   console.log(results);
   return results;
}

const getAllTenants = async () => {
   const query = knex(TENANT_TABLE).select(
      "id",
      "email",
      "first_name",
      "last_name",
      "prop_id",
      "landlord_id");
   console.log("Grabbing all tenants...");
   const results = await query;
   console.log("I all the have the tenants -");
   console.log(results);
   return results;
}

module.exports = {
   fetchTenantByID,
   loginFetchTenantByEmail,
   updateTenantById,
   getTenantsByLandlord,
   getAllTenants
}