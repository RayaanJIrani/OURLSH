import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TenantProfile } from "./profile/tenantProfile";
import { LandlordProfile } from "./profile/landlordProfile";
import { LoginPage } from "./login/login";
import { RegisterProfile } from "./register/RegisterProfile";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/tenants/:id" element={<TenantProfile />} />
        <Route exact path="/landlords/:id" element={<LandlordProfile />} />
        <Route exact path={"/register"} element={<RegisterProfile />} />
      </Routes>
    </div>
  );
};
