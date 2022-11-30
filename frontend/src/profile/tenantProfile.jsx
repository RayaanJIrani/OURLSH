import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTenantInfo, updateTenantProfile } from "../api/UserApi";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField } from "../components/textField";
import { Nav } from "../nav/nav";

{
  /* 如何用link： <Link to={'/url'}>按键的名字</Link> */
}

export const TenantProfile = () => {
  const navigate = useNavigate();
  const [tenant, setTenant] = useState(undefined);
  const params = useParams(); //使用url上的params，id
  // const identity = localStorage.getItem("tenant") ? "tenant" : "landlord";
  // const tenant_id = localStorage.getItem("tenant");
  // const landlord_id = localStorage.getItem("landlord");

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

  return (
    <div>
      <Nav></Nav>
      <div className="p-5 mt-1 pb-0">
        <h1 className="text-center bg-white p-4 py-5 display-5 fw-bold ls-tight rounded">
        Tenant Profile
        </h1>
      </div>
      <div className="m-5 rounded bg-white border border-light border-2">
        {(() => {
          if (!tenant.phote) {
            return (
              <img
                src="https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png"
                className="mt-5 my-3 col-md-3 col-lg-3 col-5 rounded mx-auto d-block"
              />
            );
          } else {
            return (
              <img
                src={tenant.pfp}
                className="mt-5 my-3 col-md-3 col-lg-3 col-5 rounded mx-auto d-block"
              />
            );
          }
        })()}
        <div className="my-4">
          <div className="my-3 text-center">
            <div>
              <h5 className="my-2">Tenant ID: {tenant.id}</h5>
              <h5 className="my-2">Property Address: {tenant.address}</h5>
              <h5 className="my-2">Landlord ID: {tenant.landlord_id}</h5>
              <h5 className="my-2">
                Last Name:
                <span className="text-muted"> {tenant.last_name}</span>
              </h5>
              <h5 className="my-2">
                First Name:
                <span className="text-muted"> {tenant.first_name}</span>
              </h5>
              <h5 className="my-2 mb-4">
                Email: <span className="text-muted">{tenant.email}</span>
              </h5>
            </div>
          </div>
          <h1 className="border-bottom mx-2"></h1>
          <div className="container col-md-8 col-lg-8 col-12 p-4">
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
                updateTenantProfile(tenant.id, tenant).then((x) => setTenant(x))
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
    </div>
  );
};
