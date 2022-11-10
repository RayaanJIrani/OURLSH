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
  const [identity, setIdentity]=useState('');
  // const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeIdentity=(e)=>{
      setIdentity(e.target.value);
  }

  const handleSubmitClick = () => {
    localStorage.clear();
    if(!identity){
      window.alert("Select Tenant or Landload"); 
    }
    else{
      if(identity === "Tenant"){
        checkTenantAccount(email, password); 
      }
      else if(identity === "Landload"){
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
// className="bg-white"
  return (
    <div className="container my-5">
      <div className="homeTitle" >
        <h1 className="bg-white rounded-1 my-5" >WELCOME TO OURLSH</h1>
      </div>
      <div className="login bg-white p-5 rounded-1">
        <div className="loginBox">
          <h1>Log In</h1>
          <input
            type="text"
            className="form-control m-1"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            className="form-control m-1"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="Radio" onChange={handleChangeIdentity}>
          <input type="radio" id="Tenant" name="fav_language" value="Tenant"/>
          <label htmlFor="html">Tenant</label>
          <br></br>
          <input type="radio" id="Landload" name="fav_language" value="Landload" />
          <label htmlFor="html">Landload</label>
          <br></br>
        </div>
        <button type="btm btm-primary" onClick={handleSubmitClick}>
          Submit
        </button>
        <button type="btm btm-primary" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
      {/* <div className="showPhoto"></div> */}
    </div>
  );
};