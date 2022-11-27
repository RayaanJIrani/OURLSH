import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { checkTenantAccount, checkLandlordAccount } from "../api/UserApi";

export const WorkOrderList = () => {
  const navigate = useNavigate();
  const [workOrder, setWorkOrder] = useState(undefined);

  return (
    <>
      {/* <div className="bg-white text-left"> */}
        <h1 className="container bg-white mt-5 p-5 display-5 fw-bold ls-tight rounded ">
          Work Order List
        </h1>
      {/* </div> */}
      <ol class="list-group list-group-light list-group-numbered mt-2 p-5">
        <li class="list-group-item d-flex justify-content-between align-items-start p-4 fs-5">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Bedroom Leaking</div> 
            Ceiling leaking in room 303.
          </div>
          <span class="badge badge-pill bg-primary">Open</span>
          <span class="fs-5">Tenant1</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start p-4 fs-5">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Power Outage</div>
            There is no power in the room 203.
          </div>
          <span class="badge badge-pill bg-primary">Open</span>
          <span class="fs-5">Tenant2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start p-4 fs-5">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Light Blub Issue</div>
            Light blub does not work for room 402.
          </div>
          <span class="badge badge-pill bg-secondary">closed</span>
          <span class="fs-5">Tenant3</span>
        </li>
      </ol>
    </>
  );
};
