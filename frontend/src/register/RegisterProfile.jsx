import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { registerTenant, registerLandlord } from "../api/UserApi";
import {WelcomeHeader, EntryBox, EntryTextField, Button, Radio} from "../components";

export const RegisterProfile = () => {
    const navigate = useNavigate();
    localStorage.clear();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [identity, setIdentity] = useState("");
    // const navigate = useNavigate();

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

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
                registerTenant(firstName, lastName, email, password);
            } else if (identity === "Landlord") {
                registerLandlord(firstName, lastName, email, password)
            }
        }
        // let response = checkAccount(email, password);
        // navigate("/tenant_profile");
    };

    const handleRegisterClick = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <>
            <WelcomeHeader/>
            <EntryBox title={"Register"}>
                <EntryTextField placeholder={"First Name"} fieldValue={firstName} fieldOnChange={handleChangeFirstName}/>
                <EntryTextField placeholder={"Last Name"} fieldValue={lastName} fieldOnChange={handleChangeLastName}/>
                <EntryTextField placeholder={"Email"} fieldValue={email} fieldOnChange={handleChangeEmail}/>
                <EntryTextField placeholder={"Password"} fieldValue={password} fieldOnChange={handleChangePassword}/>
                <Radio value={identity} onChange={handleChangeIdentity} options={[{"value": "Tenant"},{"value": "Landlord"}]}/>
                <Button buttonName={"Register"} onClick={handleSubmitClick}/>
                <Button buttonName={"Login"} buttonOnClick={handleRegisterClick}/>
            </EntryBox>
        </>
    );
};