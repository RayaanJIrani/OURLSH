import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { checkTenantAccount } from "../api/UserApi";

export const PaymentPage = () => {

  
  // const handleCacnelClick = () => {
  //   };
  return (
    <>
      <h1 className="container bg-white mt-5 p-5 display-5 fw-bold ls-tight rounded ">
        New Payment
      </h1>
      <div className="container p-5">
        <div className="card px-4">
          <p className="h8 py-3 fs-5">
            <strong>Payment Info</strong>
          </p>
          <div className="row gx-3">
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Tenant ID</p>
                <input
                  className="form-control mb-3"
                  type="text" 
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Invoice ID</p>
                <input
                  className="form-control mb-3 pt-2 "
                  type="text" 
                />
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Amount</p>
                <input
                  className="form-control mb-3"
                  type="text" 
                  placeholder="$"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Person Name</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Name"
                  //   value="Barry Allen"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Card Number</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="1234 5678 435678"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Expiry</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">CVV/CVC</p>
                <input
                  className="form-control mb-3 pt-2 "
                  type="password"
                  placeholder="***"
                />
              </div>
            </div>

            <div className="col-6 mb-3 mt-3">
              <div className="d-flex flex-column">
                <div className="btn btn-primary mb-3">
                  <span className="">Pay Now</span>
                  <span className="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3 mt-3">
              <div className="d-flex flex-column">
                <div className="btn btn-warning mb-3">
                  <span className="">Cancel</span>
                  <span className="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
