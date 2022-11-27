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
      {/* <div className="bg-white text-left"> */}
      <h1 className="container bg-white mt-5 p-5 display-5 fw-bold ls-tight rounded ">
        Work Order List
      </h1>
      {/* </div> */}
      <ol className="list-group list-group-light list-group-numbered mt-2 p-5">
        {workOrderList.map((workOrder) => (
          <li key={workOrder.wo_num} className="list-group-item">
            <div className="col badge badge-pill bg-primary align-top float-none"> 
            {workOrder.status} </div>
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
    </>
  );
};
