import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    getLandlordPayments,
  getTenantPayments,
} from "../api/UserApi";
import { Nav } from "../nav/nav";

export const PaymentList = () => {
  const identity = localStorage.getItem("tenant") ? "tenant" : "landlord";
  const tenant_id = localStorage.getItem("tenant");
  const landlord_id = localStorage.getItem("landlord");
  const navigate = useNavigate();
  const [paymentList, setPaymentList] = useState([]);

//   useEffect(() => {
//     getTenantPayments(tenant_id).then((x) => {
//     //   console.log("workorder", x);
//     setPaymentList(x);
//     });
//   }, []);

  //   paymentList
  useEffect(() => {
    if (identity === "tenant") {
      getTenantPayments(tenant_id).then((x) => {
        // console.log("payment", x);
        setPaymentList(x);
      });
    }
    if (identity === "landlord") {
        getLandlordPayments(landlord_id).then((x) => {
        // console.log("payment", x);
        setPaymentList(x);
      });
    }
  }, []);

  //   const handleDetialClick = (paymentList) => {
  //     getWorkOrderById(paymentList.id).then((x) =>
  //       navigate(`payments/${paymentList.id}`)
  //     );
  //   };

  return (
    <>
      <Nav></Nav>
      <div className="p-5 mt-1 pb-0">
        <h1 className="text-center bg-white p-4 py-5 display-5 fw-bold ls-tight rounded">
          Payment History
        </h1>
      </div>
      <ol className="list-group list-group-light list-group-numbered mt-2 p-5">
        {paymentList.map((payment) => (
          <li key={payment.payment_num} className="list-group-item">
            {/* <div className="col badge badge-pill bg-primary align-top float-none">
              {payment.status ? "Open" : "Closed"}{" "}
            </div> */}
            {/* <div className="float-end">Date: {payment.date}</div> */}
            <div className="fw-bold clearfix row">
              <div className="col"> Tenant ID: {payment.tenant_id} </div>
              <div className="col"> Person Name: {payment.person_name} </div>
              {/* <div className="col"> Amount: {payment.amount} </div> */}
            </div>
            <div className=""> Amount: {payment.amount}</div>
            <button
              type="button"
              className="btn btn-warning m-0  float-end"
              onClick={() => (
                <Link to="/">
                  {" "}
                  {navigate(`/payments/${payment.payment_num}`)}{" "}
                </Link>
              )}
            >
              Payment Details
            </button>
          </li>
        ))}
      </ol>
      {/* </div> */}
    </>
  );
};
