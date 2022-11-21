import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {registerTenant, registerLandlord, checkTenantAccount, checkLandlordAccount} from "../api/UserApi";
import {WelcomeHeader, EntryBox, EntryTextField, Button, RoleRadioSelector, Notification} from "../components";

export const RegisterProfile = () => {
    const navigate = useNavigate();
    localStorage.clear();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [identity, setIdentity] = useState("");
    const [sendNotification, setSendNotification] = useState(false);

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

    const handleRegisterClick = () => {
        console.log("A click to register");
        localStorage.clear();
        if (!identity) {
            window.alert("Select Tenant or Landlord");
        } else {
            if (identity === "Tenant") {
                registerTenant(firstName, lastName, email, password).then((response) => {
                    if (response.status <= 201) {
                        // navigate("/tenant/dashboard");
                    } else {
                        console.log("Account not succesfuly created");
                        setSendNotification(true);
                    }
                });
            } else if (identity === "Landlord") {
                registerLandlord(firstName, lastName, email, password).then((response) => {
                    if (response.status <= 201) {
                    } else {
                        console.log("Account not sucessfuly created");
                        setSendNotification(true);
                    }
                });
            }
        }
        // let response = checkAccount(email, password);
        // navigate("/tenant_profile");
    };

    const handleLoginClick = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <>
            <WelcomeHeader/>
            {sendNotification && <Notification type={"danger"} message={"Registration not successful"}/>}
            <EntryBox title={"Register"}>
                <EntryTextField placeholder={"First Name"} fieldValue={firstName} fieldOnChange={handleChangeFirstName}/>
                <EntryTextField placeholder={"Last Name"} fieldValue={lastName} fieldOnChange={handleChangeLastName}/>
                <EntryTextField placeholder={"Email"} fieldValue={email} fieldOnChange={handleChangeEmail}/>
                <EntryTextField placeholder={"Password"} fieldValue={password} fieldOnChange={handleChangePassword} isPassword={true}/>
                <RoleRadioSelector handleChangeIdentity={handleChangeIdentity}/>
                <Button buttonName={"Register"} handleClick={handleRegisterClick}/>
                <Button buttonName={"Login"} handleClick={handleLoginClick}/>
            </EntryBox>
        </>
    );
};
