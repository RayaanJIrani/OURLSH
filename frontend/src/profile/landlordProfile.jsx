import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLandlordInfo, updateLandlordProfile } from "../api/UserApi";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField } from "../components/textField";
import { Nav } from "../nav/nav";

export const LandlordProfile = () => {
  const navigate = useNavigate();
  const [landlord, setLandlord] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    getLandlordInfo(params.id).then((x) => setLandlord(x));
  }, []);

  if (!landlord) {
    return <>Loading..</>;
  }

  const mergeLandlord = (delta) => setLandlord({ ...landlord, ...delta });

  const handleLogOut = () => {
    navigate("/");
  }; //back to log in page
  const handleWorkorderlist = () => {
    navigate("/workorders");
  }; //redirect to work order list page
  const handleTenantlist = (id) => {
    navigate(`/tenantsList/${id}`);
  }; //redirect to tenant list page

  return (
    <div>
      <Nav></Nav>
      <div className="p-5 mt-1 pb-0">
        <h1 className="text-center bg-white p-4 py-5 display-5 fw-bold ls-tight rounded">
        Landlord Profile
        </h1>
      </div>
      <div className="m-5 rounded bg-white border border-light border-2">
        {(() => {
          if (!landlord.photo) {
            return (
              <img
                src="https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png"
                className="mt-5 my-3 col-md-3 col-lg-3 col-5 rounded mx-auto d-block"
              />
            );
          } else {
            return (
              <img
                src={landlord.photo}
                className="mt-5 my-3 col-md-3 col-lg-3 col-5 rounded mx-auto d-block"
              />
            );
          }
        })()}
        <div className="my-4">
          <div className="my-3 text-center">
            <div>
              {/* <h5 className="my-2">Tenant ID: {landlord.id}</h5> */}
              <h5 className="my-2">Landlord ID: {landlord.id}</h5>
              <h5 className="my-2">
                Last Name:
                <span className="text-muted"> {landlord.last_name}</span>
              </h5>
              <h5 className="my-2">
                First Name:
                <span className="text-muted"> {landlord.first_name}</span>
              </h5>
              <h5 className="my-2 mb-4">
                Email: <span className="text-muted">{landlord.email}</span>
              </h5>
            </div>
          </div>
          <h1 className="border-bottom mx-2"></h1>
          <div className="container col-md-8 col-lg-8 col-12 p-4">
            <h5>Edit Profile:</h5>
            <TextField
              label="New First Name"
              value={landlord.first_name}
              setValue={(first_name) => mergeLandlord({ first_name })}
            />
            <TextField
              label="New Last Name"
              value={landlord.last_name}
              setValue={(last_name) => mergeLandlord({ last_name })}
            />
            <TextField
              label="New Email"
              value={landlord.email}
              setValue={(email) => mergeLandlord({ email })}
            />
            <TextField
              label="New Photo"
              value={landlord.phote}
              setValue={(phote) => mergeLandlord({ phote })}
            />
            <button
              type="button"
              className="btn btn-secondary mx-0"
              onClick={() =>
                updateLandlordProfile(landlord.id, landlord).then((x) =>
                  setLandlord(x)
                )
              }
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-primary mx-0"
              onClick={() => handleTenantlist(landlord.id)}
            >
              Tenants List
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
