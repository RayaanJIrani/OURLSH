import {LoginPage} from "../login/login";
import {TenantProfile} from "../profile/tenantProfile";
import {LandlordProfile} from "../profile/landlordProfile";
import {RegisterProfile} from "../register/RegisterProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={ <LoginPage /> } exact />
            <Route path="tenant" element={ <TenantProfile />} />
            <Route path="landlord" element={ <LandlordProfile />} />
            <Route path="register" element={ <RegisterProfile />} />
        </Routes>
    </BrowserRouter>
}
