import "./landlordProfile.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLandlordInfo } from "../api/UserApi";
import { useNavigate, useLocation } from "react-router-dom";
// import { updateImage } from '../api/UserApi';

export const LandlordProfile = () => {
  const navigate = useNavigate();
  const [landload, setLandlord] = useState(undefined);
  //   const [photo, setPhoto] = useState("");
  //   const [update, setUpdate] = useState(false);
  useEffect(() => {
    getLandlordInfo().then((x) => setLandlord(x));
  }, []);

  if (!landload) {
    //在加载期间显示
    return <>Loading..</>;
  }

  //   const handlePhoto = (e) => {
  //     setPhoto(e.target.value);
  //     setUpdate(false);
  //   };

  //   const handleUpdate = (e) => {
  //     e.preventDefault();
  //     setUpdate(true);
  //     updateImage(photo);
  //   };

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div className="app">
      <h1 className="app-name">Welcome to OURLSH!</h1>
      <div className="info-bar">
        {/* <div>
          {(() => {
            if (landload[0].profile_pic === null) {
              return (
                <img
                  src="https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png"
                  className="profilePic"
                />
              );
            } else {
              return (
                <img src={landload[0].profile_pic} className="profilePic" />
              );
            }
          })()}
        </div> */}
        {/* <div className="pic-btn">
            <input className="updatePhoto" value={photo} onChange={handlePhoto}></input>
            <button onClick={handleUpdate}>Update Portrait</button>
        </div> */}
        <div className="info">
          <h2>Landlord Information:</h2>
          <h3>
            Name: {landload[0].first_name} {landload[0].last_name}
          </h3>
          <h3>Email: {landload[0].email}</h3>
          <h3>Prop ID: {landload[0].prop_id}</h3>
          <h3>Landlord ID: {landload[0].landlord_id}</h3>
        </div>
      </div>
      <div className="btns">
        <h2> Selection:</h2>
        <button type="button" className="btn">
          <Link to="/workorderlist">Workorder List</Link>
        </button>
        <button type="button" className="btn">
          <Link to="/tenantlist"> Tenant List</Link>
        </button>
      </div>
      <div className="other-btns">
        <button type="button" className="logout-btn" onClick={handleLogOut}>
          Log Out
        </button>
        <button type="button" className="edit-btn">
          Edit Profile
        </button>
      </div>
    </div>
  );
};
