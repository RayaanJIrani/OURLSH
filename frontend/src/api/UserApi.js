import axios from "axios";
const baseEndpoint = "http://localhost:8000";

// Login Tenant
export const checkTenantAccount = (email,password) =>new Promise((resolve, reject) =>{
  axios.post(baseEndpoint+'/login/tenant',{email:email, password:password})
          .then(function(response){
              if(response.status === 200){
                  localStorage.setItem('token',response.data); //存token 
                  window.location.href="./tenants/"+response.data.id; 
                  window.alert("Successfully log in!!"); 
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

// Login Landlord
export const checkLandlordAccount = (email,password) =>new Promise((resolve, reject) =>{
  axios.post(baseEndpoint+'/login/landlord',{email:email, password:password})
          .then(function(response){
              if(response.status === 200){
                  localStorage.setItem('token',response.data);//存token

                  window.location.href="./landlords/"+response.data.id; 
                  window.alert("Successfully log in!!"); 
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

// Tenant Profile
export const getTenantInfo = (id) => new Promise((resolve, reject) => {
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

// Landlord Profile
export const getLandlordInfo = (id) => new Promise((resolve, reject) => {
  let apiConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),//login放token如local storage，我再取
    },
  };
  axios
    .get(`${baseEndpoint}/landlords/${id}`, apiConfig)
    .then((x) => resolve(x.data))
    .catch((x) => {
      alert(x);
      reject(x);
    });
});

// Update Tenant    
export const updateTenantProfile = (id, body) =>new Promise((resolve,reject)=>{
    let apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
    };
    axios
        .put(`${baseEndpoint}/tenants/${id}`, {body}, apiConfig)
        .then(function(response){
            console.log("Successfully changed!!");
        })
        .catch(function(error){
            window.alert(error);
        });
});

// Update Landlord
export const updateLandlordProfile = (id, body) =>new Promise((resolve,reject)=>{
    let apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
    };
    axios
        .put(`${baseEndpoint}/tenants/${id}`, {body}, apiConfig)
        .then(function(response){
            console.log("Successfully changed!!");
        })
        .catch(function(error){
            window.alert(error);
        });
});

export const registerTenant = (firstName, lastName, email, password) => new Promise((resolve, reject) => {
    axios.post(baseEndpoint + '/register/tenant', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    })
        .then(function (response) {
            if (response.status === 200) {
                sessionStorage.setItem('token', response.data.accessToken);
                console.log('this is the response: ');
                resolve(response);
            } else {
                window.alert("Register with error");
            }
        })
        .catch(function (error) {
            console.log('this is the error: ');
            console.log(error);
            reject(error);
        });
});

export const registerLandlord = (firstName, lastName, email, password) => new Promise((resolve, reject) => {
    axios.post(baseEndpoint + '/register/landlord', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    })
        .then(function (response) {
            if (response.status === 200) {
                sessionStorage.setItem('token', response.data.accessToken);
                console.log('this is the response: ');
                resolve(response);
            } else {
                window.alert("Register with error");
            }
        })
        .catch(function (error) {
            console.log('this is the error: ');
            console.log(error);
            reject(error);
        });
});



