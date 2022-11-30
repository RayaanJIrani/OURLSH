// import { TextField } from "@mui/material";
// import { Button } from "@material-ui/core";
// import { Link, useNavigate} from 'react-router-dom';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { checkTenantAccount, checkLandlordAccount } from "../api/UserApi";
import {WelcomeHeader, EntryBox, EntryTextField, Button, RoleRadioSelector} from "../components";

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
      window.alert("Select Tenant or Landlord");
    } else {
      if (identity === "Tenant") {
        checkTenantAccount(email, password);
      } else if (identity === "Landlord") {
        checkLandlordAccount(email, password);
      }
    }
  };

  const handleRegisterClick = () => {
    localStorage.clear();
    navigate("/register");
  };
  return (
    <>
      <WelcomeHeader/>
            <EntryBox title={"Sign in"}>
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
                      id="Landlord"
                      name="fav_language"
                      value="Landlord"
                    />
                    <label
                      className="custom-control-label fs-4  p-2"
                      htmlFor="html"
                    >
                      Landlord
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
      </EntryBox>
    </>
  );
};
