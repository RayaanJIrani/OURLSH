import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getWorkOrders, getWorkOrderById } from "../api/UserApi";
import { Nav } from "../nav/nav";

export const WorkOrderList = () => {
  const navigate = useNavigate();
  const [workOrderList, setWorkOrderList] = useState([]);

  useEffect(() => {
    getWorkOrders().then((x) => {
      console.log("workorder", x);
      setWorkOrderList(x);
    });
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="p-5 mt-1 pb-0">
        <h1 className="text-center bg-white p-4 py-5 display-5 fw-bold ls-tight rounded">
          Work Order List
        </h1>
      </div>
      <ol className="list-group list-group-light list-group-numbered mt-2 p-5">
        {workOrderList.map((workOrder) => (
          <li key={workOrder.wo_num} className="list-group-item">
            <div className="col badge badge-pill bg-primary align-top float-none">
              {workOrder.status ? "Open" : "Closed"}{" "}
            </div>
            <div className="float-end">Date: {workOrder.date}</div>
            <div className="fw-bold clearfix row">
              <div className="col"> Tenant ID: {workOrder.tenant_id} </div>
              <div className="col"> Landlord ID: {workOrder.land_id} </div>
              <div className="col"> Address: {workOrder.address} </div>
            </div>
            <div className=""> Descroption: {workOrder.description}</div>
            <button
              type="button"
              className="btn btn-secondary m-0  float-end"
              onClick={() => (
                <Link to="/">
                  {" "}
                  {navigate(`/workorders/${workOrder.wo_num}`)}{" "}
                </Link>
              )}
            >
              Work Order Details
            </button>
          </li>
        ))}
      </ol>
      {/* </div> */}
    </>
  );
};
