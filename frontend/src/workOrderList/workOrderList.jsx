import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWorkOrders, getWorkOrderById } from "../api/UserApi";

export const WorkOrderList = () => {
  const navigate = useNavigate();
  const [workOrderList, setWorkOrderList] = useState([]);

  useEffect(() => {
    getWorkOrders().then((x) => {
      console.log("workorder", x);
      setWorkOrderList(x);
    });
  }, []);

  const handleDetialClick = (workOrder) => {
    getWorkOrderById(workOrder.id).then((x) =>
      navigate(`workorderlists/${workOrder.id}`)
    );
  };

  return (
    <>
      <nav className=" bg-black bg-opacity-50 px-3 pt-3 pb-1 my-0 navbar ">
      <div className=" px-3">
        <h1 className="text-center text-white">
          MENU
        </h1>
        </div>
        <div className=" row "> 
        <div className="nav-item active col" aria-current="page">
            <a
              className="nav-link text-white  p-2 col"
              href="/workorders"
            >
               OrderList{" "}
            </a>
          </div>
          <div className="nav-item col" aria-current="page">
            <a
              className="nav-link text-white p-2"
              href="/workorders"
            >
              NewOrder{" "}
            </a>
          </div>
          <div className="nav-item col" aria-current="page">
            <a
              className="nav-link text-white  p-2"
              href="/payments"
            >
              NewPayment{" "}
            </a>
          </div>
          <div className="nav-item col" aria-current="page">
            <a
              className="nav-link text-white  p-2"
              href="/profiles"
            >
              MyProfile{" "}
            </a>
          </div> 
        </div>
      </nav>
      {/* <div className="bg-white text-left"> */}
      <div className="p-5 mt-3 pb-0">
        <h1 className=" bg-white p-5 display-5 fw-bold ls-tight rounded ">
          Work Order List
        </h1>
        </div>

        {/* </div> */}
        <ol className="list-group list-group-light list-group-numbered mt-2 p-5">
          {workOrderList.map((workOrder) => (
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
