import axios from "axios";
const baseEndpoint = "http://localhost:8000";

// log in 
export const checkAccount = (email,password) =>new Promise((resolve, reject) =>{
  axios.post(baseEndpoint+'/login/tenant',{email:email, password:password})
          .then(function(response){
              if(response.status === 200){
                  localStorage.setItem('token',response.data);//存token
                  window.alert("Successfully log in!!"); 
                  // window.location.href="./studentHome";
              }
              else{
                  window.alert("Logged with error");
              }
          })
          .catch(function(error){
              if(error.response.status === 401){
                  window.alert("Unmatched username & password");
              }
              else{
                  window.alert(error);
              }
      });
});


// tenant profile
// export const getTenantInfo = () => new Promise((resolve, reject) => {
//   let apiConfig = {
//     headers: {
//       Authorization: "Bearer " + localStorage.getItem("token"),//login放token如local storage，我再取
//     },
//   };
//   axios.get(`${baseEndpoint}/tenants`, apiConfig)
//     .then((x) => resolve(x.data))
//     .catch((x) => {
//       alert(x);
//       reject(x);
//     });
// });

export const getTenantInfo = (id) => new Promise((resolve, reject) => {
  id = 1
    let apiConfig = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),//login放token如local storage，我再取
      },
    };
    axios
      .get(`${baseEndpoint}/tenants/${id}`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });


  export const getLandlordInfo = (id) => new Promise((resolve, reject) => {
    id = 1
      let apiConfig = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),//login放token如local storage，我再取
        },
      };
      axios
        .get(`${baseEndpoint}/landlord/${id}`, apiConfig)
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
