import './profile.css';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getUserInfo } from "../api/UserApi";

// export const Profile = () => {

//   const [user, setUser]=useState(undefined);
// //   const [photo,setPhoto]=useState('');
//   const [update, setUpdate]=useState(false);
//   useEffect(()=>{
//       getUserInfo().then(x => setUser(x))
//   },[ update ]);

//   if(!user){
//      return<>Loading..</>
//   }

//   const handlePhoto = (e) => {
//     setPhoto(e.target.value);
//     setUpdate(false);
//   };   
  
//   const handleUpdate = (e) => {
//     e.preventDefault();
//       setUpdate(true);
//     //   updateImage(photo);
//     };

//     return(
    // <div className = "app">
    //         <h1 className = "app-name" >Welcome to OURLSH!</h1>
    //         <div className = "info-bar">
    //            <div>
    //                 {(() => {
    //                 if(tenant[0].profile_pic===null){
    //                     return <img src='https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png' className="profilePic"/>
    //                 }
    //                 else{
    //                     return <img src={tenant[0].profile_pic} className="picture"/>
    //                 }
    //                 })()}
    //             </div>
    //             <div className = "info">
    //                 <h2>Tenant Information:</h2>
    //                 <h3>Name: {tenant[0].firstname} {tenant[0].lastname}</h3>
    //                 <h3>Email: {tenant[0].emial}</h3>
    //                 <h3>Prop ID: {tenant[0].prop_id}<</h3>
    //                 <h3>Landlord ID: {tenant[0].landlord_id}</h3>
    //             </div>
    //         </div>
    //         <div className = "btns">
    //             <h2> Selection:</h2>
    //             <button type="button" className='btn'><Link to='/workorderlist'>Workorder List</Link></button>
    //             <button type="button" className='btn'>Create Workorder</button>
    //             <button type="button" className='btn'>Make a Payment</button>
    //         </div>
    //         <div className = "other-btns">
    //             <button type="button" className='logout-btn'>Log Out</button>
    //             <button type="button" className='edit-btn'>Edit Profile</button>
    //         </div>
    //     </div>
//     );
// };

export const Profile = () => {
    return(
        <div className = "app">
            <h1 className = "app-name" >Welcome to OURLSH!</h1>
            <div className = "info-bar">
                <div>
                    <img className = "picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                </div>
                <div className = "info">
                    <h2>Tenant Information:</h2>
                    <h3>Name: Ziyu Sun</h3>
                    <h3>Email: ziyus@smu.edu</h3>
                    <h3>Prop ID: 12345</h3>
                    <h3>Landlord ID: 23452</h3>
                </div>
            </div>
            <div className = "btns">
                <h2> Selection:</h2>
                <button type="button" className='btn'>Workorder List</button>
                <button type="button" className='btn'>Create Workorder</button>
                <button type="button" className='btn'>Make a Payment</button>
            </div>
            <div className = "other-btns">
                <button type="button" className='logout-btn'>Log Out</button>
                <button type="button" className='edit-btn'>Edit Profile</button>
            </div>
        </div>
    )
}
