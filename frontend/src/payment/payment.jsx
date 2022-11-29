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
      <div class="container p-5">
        <div class="card px-4">
          <p class="h8 py-3 fs-5">
            <strong>Payment Info</strong>
          </p>
          <div class="row gx-3">
            <div class="col-12">
              <div class="d-flex flex-column">
                <p class="text mb-1">Person Name</p>
                <input
                  class="form-control mb-3"
                  type="text"
                  placeholder="Name"
                  //   value="Barry Allen"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex flex-column">
                <p class="text mb-1">Card Number</p>
                <input
                  class="form-control mb-3"
                  type="text"
                  placeholder="1234 5678 435678"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">Expiry</p>
                <input
                  class="form-control mb-3"
                  type="text"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">CVV/CVC</p>
                <input
                  class="form-control mb-3 pt-2 "
                  type="password"
                  placeholder="***"
                />
              </div>
            </div>

            <div class="col-6 mb-3 mt-3">
              <div class="d-flex flex-column">
                <div class="btn btn-primary mb-3">
                  <span class="">Pay Now</span>
                  <span class="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
            <div class="col-6 mb-3 mt-3">
              <div class="d-flex flex-column">
                <div class="btn btn-warning mb-3">
                  <span class="">Cancel</span>
                  <span class="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
