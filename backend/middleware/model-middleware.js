const Tenant = require('../models/tenant');
const Register = require('../models/register');
const Landlord = require('../models/landlord');
const Login = require('../models/login');
const WorkOrder = require('../models/workorder');
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      tenant: Tenant,
      register: Register,
      landlord: Landlord,
      login: Login,
      workorder: WorkOrder
  }
  next();
}
module.exports = {
  createModelsMiddleware
}