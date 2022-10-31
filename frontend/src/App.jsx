import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TenantProfile } from"./profile/tenantProfile";
import { LandlordProfile } from"./profile/landlordProfile";
import { LoginPage } from "./login/login";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/tenant_profile" element={<TenantProfile/>} />
        <Route exact path="/landlord_profile" element={<LandlordProfile/>} />
      </Routes>
    </div>
  );
}
