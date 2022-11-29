import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLandlordInfo, updateLandlordProfile } from "../api/UserApi";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField } from "../components/textField";

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
  const handleTenantlist = () => {
    navigate("/tenantlist");
  }; //redirect to tenant list page

  return (
    <div className="container my-5 bg-white border border-light border-2">
      <h1 className="text-center border-bottom py-5 mx-5">Welcome to OURLSH!</h1>
      {(() => {
        if (!landlord.photo) {
          return (
            <img
              src="https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png"
              className="my-3 col-md-3 col-lg-3 col-3 rounded mx-auto d-block"
            />
          );
        } else {
          return (
            <img
              src={landlord.photo}
              className="my-3 col-md-3 col-lg-3 col-3 rounded mx-auto d-block"
            />
          );
        }
      })()}
      <div className="my-4">
        <div className="my-3 text-center">
          <h2 className="my-3">Tenant Profile:</h2>
          <div>
            <h5 className="my-2">Tenant ID: {landlord.id}</h5>
            <h5 className="my-2">Property ID: {landlord.prop_id}</h5>
            <h5 className="my-2">Landlord ID: {landlord.landlord_id}</h5>
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
        <h1 className="border-bottom mx-5"></h1>
        <div className="container col-md-8 col-lg-8 col-8 p-4">
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
