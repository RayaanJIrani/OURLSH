import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Profile } from"./profile/profile";
import { LoginPage } from "./login/login";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}
