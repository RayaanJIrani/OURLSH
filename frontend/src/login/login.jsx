// import { TextField } from "@mui/material";
// import { Button } from "@material-ui/core";
// import { Link, useNavigate} from 'react-router-dom';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { checkTenantAccount, checkLandlordAccount } from "../api/UserApi";

export const LoginPage = () => {
  const navigate = useNavigate();
  localStorage.clear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [identity, setIdentity] = useState("");
  // const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeIdentity = (e) => {
    setIdentity(e.target.value);
  };

  const handleSubmitClick = () => {
    localStorage.clear();
    if (!identity) {
      window.alert("Select Tenant or Landload");
    } else {
      if (identity === "Tenant") {
        checkTenantAccount(email, password);
      } else if (identity === "Landload") {
        checkLandlordAccount(email, password);
      }
    }
    // let response = checkAccount(email, password);
    // navigate("/tenant_profile");
  };

  const handleRegisterClick = () => {
    localStorage.clear();
    navigate("/register");
  };
  return (
    <>
      <div className="bg-white text-left">
        <h1 className="container p-5 display-5 fw-bold ls-tight mx-0">
          WELCOME TO OURLSH
        </h1>
      </div>
      <div className="p-5">
      <div className="container py-5 my-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-8 col-xl-6">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h1 className="mb-5 ">Sign in</h1>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg p-3 fs-4"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </div>
                <div className="form-outline mb-4 ">
                  <input
                    type="password"
                    className="form-control form-control-lg p-3 fs-4"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangePassword}
                  />
                </div>
                <div
                  className="d-flex justify-content-start mb-4"
                  onChange={handleChangeIdentity}
                >
                  <div className="col-7 ">
                    <input
                      className=""
                      type="radio"
                      id="Tenant"
                      name="fav_language"
                      value="Tenant"
                    />
                    <label
                      className="custom-control-label fs-4 p-2"
                      htmlFor="html"
                    >
                      Tenant
                    </label>
                  </div>
                  <div className="col-7 d-flex ">
                    <input
                      className=""
                      type="radio"
                      id="Landload"
                      name="fav_language"
                      value="Landload"
                    />
                    <label
                      className="custom-control-label fs-4  p-2"
                      htmlFor="html"
                    >
                      Landload
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <button
                    className="btn btn-primary btn-lg btn-block col-12 text-center p-2 mx-0"
                    type="button"
                    onClick={handleSubmitClick}
                  >
                    Log in
                  </button>
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block col-12 text-center p-2 mx-0"
                    onClick={handleRegisterClick}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
