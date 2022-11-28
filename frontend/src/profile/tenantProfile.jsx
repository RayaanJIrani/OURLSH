import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTenantInfo, updateTenantProfile } from "../api/UserApi";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField } from "../components/textField";

{
  /* 如何用link： <Link to={'/url'}>按键的名字</Link> */
}

export const TenantProfile = () => {
  const navigate = useNavigate();
  const [tenant, setTenant] = useState(undefined);
  const params = useParams(); //使用url上的params，id

  useEffect(() => {
    getTenantInfo(params.id).then((x) => setTenant(x));
  }, []);

  if (!tenant) {
    return <>Loading..</>;
  }

  const mergeTenant = (delta) => setTenant({ ...tenant, ...delta });

  const handleLogOut = () => {
    navigate("/");
  }; //back to log in page
  const handleWorkorderlist = () => {
    navigate("/workorders");
  }; //redirect to work order list page
  const handleWorkorder = () => {
    navigate("/workorder");
  }; //redirect to work order page
  const handlePayment = () => {
    navigate("/payments");
  }; //redirect to payment page

  return (
    <div className="container my-5 bg-white border border-light border-2">
      <h1 className="text-center border-bottom py-5">Welcome to OURLSH!</h1>
      {(() => {
        if (!tenant.photo) {
          return (
            <img
              src="https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png"
              className="my-4 col-4 rounded mx-auto d-block"
            />
          );
        } else {
          return (
            <img
              src={tenant.photo}
              className="my-4 col- rounded mx-auto d-block"
            />
          );
        }
      })()}
      <div className="my-4 row justify-content-center">
        <div className="col-md-4 col-lg-3 col-6 my-3">
          <h2 className="my-3">Tenant Profile:</h2>
          <div>
            <h5 className="my-2">Tenant ID: {tenant.id}</h5>
            <h5 className="my-2">Property ID: {tenant.prop_id}</h5>
            <h5 className="my-2">Landlord ID: {tenant.landlord_id}</h5>
            <h5 className="my-2">
              Last Name:
              <span className="text-muted"> {tenant.last_name}</span>
            </h5>
            <h5 className="my-2">
              First Name:
              <span className="text-muted"> {tenant.first_name}</span>
            </h5>
            <h5 className="my-2">
              Email: <span className="text-muted">{tenant.email}</span>
            </h5>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-4 my-3">
          <h2 className="my-3"> Selection:</h2>
          <div className="my-3">
            <button
              type="button"
              className="btn btn-primary mx-0"
              onClick={handleWorkorderlist}
            >
              Workorder List
            </button>
          </div>
          <div className="my-3">
            <button
              type="button"
              className="btn btn-primary mx-0"
              onClick={handleWorkorder}
            >
              Create Workorder
            </button>
          </div>
          <div className="my-3">
            <button
              type="button"
              className="btn btn-primary mx-0"
              onClick={handlePayment}
            >
              Make Payments
            </button>
          </div>
        </div>
        <div className="container col-md-8 col-lg-8 col-11 p-4 border-top">
          <h5>Edit Profile:</h5>
          <TextField
            label="New First Name"
            value={tenant.first_name}
            setValue={(first_name) => mergeTenant({ first_name })}
          />
          <TextField
            label="New Last Name"
            value={tenant.last_name}
            setValue={(last_name) => mergeTenant({ last_name })}
          />
          <TextField
            label="New Email"
            value={tenant.email}
            setValue={(email) => mergeTenant({ email })}
          />
          <TextField
            label="New Photo"
            value={tenant.phote}
            setValue={(phote) => mergeTenant({ phote })}
          />
          <button
            type="button"
            className="btn btn-secondary mx-0"
            onClick={() =>
              updateTenantProfile(tenant.id, tenant).then((x) =>
                setTenant(x)
              )
            }
          >
            Save
          </button>
        </div>
      </div>
      <button
        type="button"
        className="float-end m-3 btn btn-secondary"
        onClick={handleLogOut}
      >
        Log Out
      </button>
      <div className="clearfix"></div>
    </div>
  );
};
