import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import { checkTenantAccount, createPayment } from "../api/UserApi";
import { Nav } from "../nav/nav";

export const PaymentPage = () => {
  const navigate = useNavigate();
  const tenant_id = localStorage.getItem("tenant");
  const [ amount, setAmount ] = useState(""); 
  const [ name, setName ] = useState(""); 
  const [ card, setCard ] = useState(""); 
  const [ expiry, setExpiry ] = useState(""); 
  const [ cvv, setCvv ] = useState(""); 
  // const handleCacnelClick = () => {
  //   };

  const handlePayClick = () => {
    createPayment(tenant_id, amount, name, card, expiry, cvv); 
    navigate(`/workorders`);
  };

  const handleCancelClick = () => { 
    setAmount("");
    setName("");
    setCard("");
    setExpiry("");
    setCvv(""); 
  };
  return (
    <>
      <Nav></Nav>
      <div className="p-5 mt-1 pb-0">
        <h1 className="text-center bg-white p-4 py-5 display-5 fw-bold ls-tight rounded">
          New Payment
        </h1>
      </div>
      <div className="p-5">
        <div className="card px-5 py-3">
          <p className="h8 py-3 fs-5">
            <strong>Payment Info</strong>
          </p>
          <div className="row gx-3">
            {/* <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Tenant ID</p>
                <input className="form-control mb-3" type="text" />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Invoice ID</p>
                <input className="form-control mb-3 pt-2 " type="text" />
              </div>
            </div> */}

            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Amount</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="$"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
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
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                  value={card}
                  onChange={(event) => setCard(event.target.value)}
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
                  value={expiry}
                  onChange={(event) => setExpiry(event.target.value)}
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
                  value={cvv}
                  onChange={(event) => setCvv(event.target.value)}
                />
              </div>
            </div>

            <div className="col-6 mb-3 mt-3">
              <div className="d-flex flex-column">
                <div className="btn btn-primary mb-3" onClick={handlePayClick}> 
                  <span className="">Pay</span>
                  <span className="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3 mt-3">
              <div className="d-flex flex-column">
                <div className="btn btn-warning mb-3" onClick={handleCancelClick}>
                  <span className="" >Cancel</span>
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
