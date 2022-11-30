import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getWorkOrders, getWorkOrderById } from "../api/UserApi";
import { Nav } from "../nav/nav";

export const PaymentList = () => {
  const navigate = useNavigate();
  const [paymentList, setPaymentList] = useState([]);

  // paymentList
//   useEffect(() => {
//     getWorkOrders().then((x) => {
//       console.log("workorder", x);
//       setPaymentList(x);
//     });
//   }, []);

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
          Work Order List
        </h1>
      </div>
      <ol className="list-group list-group-light list-group-numbered mt-2 p-5">
        {paymentList.map((workOrder) => (
          <li key={workOrder.wo_num} className="list-group-item">
            <div className="col badge badge-pill bg-primary align-top float-none">
              {workOrder.status ? "Open" : "Closed"}{" "}
            </div>
            <div className="float-end">Date: {workOrder.date}</div>
            <div className="fw-bold clearfix row">
              <div className="col"> Prop ID: {workOrder.prop_id} </div>
              <div className="col"> Tenant ID: {workOrder.tenant_id} </div>
              <div className="col"> Landlord ID: {workOrder.land_id} </div>
            </div>
            <div className=""> Descroption: {workOrder.description}</div>
          </li>
        ))}
      </ol>
      {/* </div> */}
    </>
  );
};
