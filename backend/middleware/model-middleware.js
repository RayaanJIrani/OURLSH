const Tenant = require('../models/tenant');
const Register = require('../models/register');
const Landlord = require('../models/landlord');
const Login = require('../models/login');
const WorkOrder = require('../models/workorder');
const Payment = require('../models/payment');
const Invoice = require('../models/invoice'); 
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      tenant: Tenant,
      register: Register,
      landlord: Landlord,
      login: Login,
      workorder: WorkOrder,
      payment: Payment,
      invoice: Invoice
  }
  next();
}
module.exports = {
  createModelsMiddleware
}