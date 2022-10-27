import axios from "axios";
const baseEndpoint = "http://localhost:8000";

// export const getTenantInfo = (id) => new Promise((resolve, reject) => {
//     let apiConfig = {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),//login放token如local storage，我再取
//       },
//     };
//     axios
//       .get(`${baseEndpoint}/tenants/${id}`, apiConfig)
//       .then((x) => resolve(x.data))
//       .catch((x) => {
//         alert(x);
//         reject(x);
//       });
  // });

export const getTenantInfo = () => new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),//login放token如local storage，我再取
      },
    };
    axios
      .get(`${baseEndpoint}/tenants`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });

// export const updateImage = (photo) =>new Promise((resolve,reject)=>{
//     let apiConfig={
//         headers:{
//             Authorization:'Bearer ' + localStorage.getItem('token')
//         }
//     };
//     axios.put(`${baseEndpoint}/tenants/picture`, {profile_pic: photo}, apiConfig)
//     .then(function(response){
//         console.log("Successfully changed!!");
//     })
//     .catch(function(error){
//         window.alert(error);
//     });
// });
