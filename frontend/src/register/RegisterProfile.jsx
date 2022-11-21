import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {registerTenant, registerLandlord, checkTenantAccount, checkLandlordAccount} from "../api/UserApi";
import {WelcomeHeader, EntryBox, EntryTextField, Button, RoleRadioSelector} from "../components";

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
        console.log("Changed identity to: " + e.target.value);
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
                        window.alert("Tenant account created successfully");
                    } else {
                        window.alert("Email already exists");
                    }
                });
            } else if (identity === "Landlord") {
                registerLandlord(firstName, lastName, email, password).then((response) => {
                    if (response.status <= 201) {
                        window.alert("Landlord account created successfully");
                    } else {
                        window.alert("Email already exists");
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
