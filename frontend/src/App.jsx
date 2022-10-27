import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Profile } from"./components/profile";

export const App = () => {
  return (
    // <div className = "tenant profile">
    //   <Profile />
    // </div>
    <div>
      <Routes>
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}
