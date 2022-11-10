import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLandlordInfo } from "../api/UserApi";
import { useNavigate, useLocation } from 'react-router-dom';
import { TextField } from '../components/textField';
// import { updateImage } from '../api/UserApi';

export const LandlordProfile = () => {
  const navigate = useNavigate();
  const [landlord, setLandlord] = useState(undefined);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhoto, setNewPhoto] = useState('');
  const [edit, setEdit] = useState('0');

  // const params = useParams();

  useEffect(() => {
    // if(params.id){
    //   getLandlordInfo(params.id).then((x) => setLandlord(x));
    // }else{
    //   setLandlord({});
    // }
    getLandlordInfo(1).then((x) => setLandlord(x));
  }, []);

  if (!landlord) { //在加载期间显示
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

  const handleLogOut = () =>{
    navigate('/');
  }; //back to log in page
  const handleWorkorderlist = () =>{
    navigate('/workorderlist');
  }; //redirect to work order list page
  const handleTenantlist = () =>{
    navigate('/tenantlist');
  }; //redirect to tenant list page
  const handlEdit = (e) =>{
    e.preventDefault();
    setEdit('1');
  };

  return (
    <div className="container my-5 bg-white border border-light border-2">
      <h1 className="text-center border-bottom py-5">Welcome to OURLSH!</h1>
      {(() => {
        if (!landlord[0].profile_pic) {
          return (
            <img src="https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png" className="my-4 rounded mx-auto d-block"/>
          );
        } else {
          return (
            <img src={landlord[0].profile_pic} className="my-4 rounded mx-auto d-block"/>
          );
        }
      })()}
      <div className="my-4 row justify-content-center">
        <div className="col-4 my-3">
          <h2 className="my-3">Landlord Profile:</h2>
          <div>
            <h5 className="my-2">Landlord ID: {landlord[0].id}</h5>
            <h5 className="my-2">Last Name: <span className="text-muted">{landlord[0].last_name}</span></h5>
            <h5 className="my-2">First Name: <span className="text-muted">{landlord[0].first_name}</span></h5>
            <h5 className="my-2">Email: <span className="text-muted">{landlord[0].email}</span></h5>
          </div>
        </div>
        <div className="col-3 my-3">
          <h2 className="my-3"> Selection:</h2>
          <div className="my-3">
            <button type="button" className="btn btn-primary" onClick={handleWorkorderlist}>
              Workorder List
            </button>
          </div>
          <div className="my-3">
            <button type="button" className="btn btn-primary" onClick={handleTenantlist}>
              Tenant List
            </button>
          </div>
        </div>
        <div className="container col-8 p-4 border-top">
            <h5>Edit Profile:</h5>
            <TextField label="New Last Name"
              value={newFirstName}
              setValue={ setNewFirstName } />
            <TextField label="New First Name"
              value={newLastName}
              setValue={ setNewLastName } />
            <TextField label="New Email"
              value={newEmail}
              setValue={ setNewEmail } />
            <TextField label="New Photo"
              value={newPhoto}
              setValue={ setNewPhoto } />
            <button type="button" className="btn btn-secondary" onClick={handlEdit}>
              Save
            </button>
        </div>
      </div>
      <button type="button" className="float-end m-3 btn btn-secondary" onClick={handleLogOut}>
        Log Out
      </button>
      <div className="clearfix"></div>
    </div>
  );
};