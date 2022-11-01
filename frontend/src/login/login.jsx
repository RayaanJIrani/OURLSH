// import { TextField } from "@mui/material";
// import { Button } from "@material-ui/core";
// import { Link, useNavigate} from 'react-router-dom';
import "./login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { checkAccount } from "../api/UserApi";

export const LoginPage = () => {
  const navigate = useNavigate();
  localStorage.clear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [identity, setIdentity]=useState('');
  // const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleChangeIdentity=(e)=>{
  //     setIdentity(e.target.value);
  // }

  // value={identity} onChange={handleChangeIdentity}

  const handleSubmitClick = () => {
    localStorage.clear();
    checkAccount(email, password); 
    navigate("/tenant_profile");
  };

  return (
    <>
      <div className="homeTitle">
        <h1>WELCOME TO OURLSH</h1>
      </div>
      <div className="login">
        <div className="loginBox">
          <h1>Log In</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="Radio">
          <input type="radio" id="Tenant" name="fav_language" />{" "}
          <label htmlFor="html">Tenant</label>
          <br></br>
          <input type="radio" id="Landload" name="fav_language" />{" "}
          <label htmlFor="html">Landload</label>
          <br></br>
        </div>
        <button type="button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
      <div className="showPhoto"></div>
    </>
  );
};
