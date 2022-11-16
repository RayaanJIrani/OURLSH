import {LoginPage} from "../login/login";
import {TenantProfile} from "../profile/tenantProfile";
import {LandlordProfile} from "../profile/landlordProfile";
import {RegisterProfile} from "../register/RegisterProfile";
import {Route, Routes } from "react-router-dom";
import { Navigate, useRoutes } from 'react-router-dom';

export const Router = () => {
    return useRoutes([
        { path: '/', element: <LoginPage /> },
        { path: '/tenant', element: <TenantProfile /> },
        { path: '/landlord', element: <LandlordProfile /> },
        { path: '/register', element: <RegisterProfile /> },
        { path: '*', element: <Navigate to="/" /> }
    ]);
}

