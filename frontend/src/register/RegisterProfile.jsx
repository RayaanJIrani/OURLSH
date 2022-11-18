// import { TextField } from "@mui/material";
// import { Button } from "@material-ui/core";
// import { Link, useNavigate} from 'react-router-dom';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { checkTenantAccount, checkLandlordAccount } from "../api/UserApi";
import {WelcomeHeader, EntryBox, EntryTextField} from "../components";

export const RegisterProfile = () => {
    const navigate = useNavigate();
    localStorage.clear();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
            <WelcomeHeader/>
            <EntryBox title={"Register"}>
                <EntryTextField placeholder={"First Name"} fieldValue={firstName} fieldOnChange={setFirstName}/>
                <EntryTextField placeholder={"Last Name"} fieldValue={lastName} fieldOnChange={setLastName}/>
                <EntryTextField placeholder={"Email"} fieldValue={email} fieldOnChange={handleChangeEmail}/>
                <EntryTextField placeholder={"Password"} fieldValue={password} fieldOnChange={handleChangePassword}/>
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
                        Login in
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