import {LoginPage} from "../login/login";
import {TenantProfile} from "../profile/tenantProfile";
import {LandlordProfile} from "../profile/landlordProfile";
import {RegisterProfile} from "../register/RegisterProfile";
import { Navigate, useRoutes } from 'react-router-dom';

export const Router = () => {
    //TODO: As more pages are added, these routes will need to be updated. Have Ray Irani do this.
    return useRoutes([
        { path: '/', element: <LoginPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/tenants/:id', element: <TenantProfile /> },
        { path: '/landlords/:id', element: <LandlordProfile /> },
        { path: '/register', element: <RegisterProfile /> }
    ]);
}
