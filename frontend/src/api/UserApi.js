import axios from "axios";
const baseEndpoint = "http://localhost:8000";

// Login Tenant
export const checkTenantAccount = (email, password) =>
  new Promise((resolve, reject) => {
    axios
      .post(baseEndpoint + "/login/tenant", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("tenant", response.data.id);
          window.location.href = "./workorders";
          //   window.location.href="./tenants/"+response.data.id;
          window.alert("Successfully log in!!");
        } else {
          window.alert("Logged with error");
        }
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          window.alert("Unmatched username & password");
        } else {
          window.alert(error);
        }
      });
  });

// Login Landlord
export const checkLandlordAccount = (email, password) =>
  new Promise((resolve, reject) => {
    axios
      .post(baseEndpoint + "/login/landlord", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("landlord", response.data.id);
          window.location.href = "./workorders";
          //   window.location.href="./landlords/"+response.data.id;
          window.alert("Successfully log in!!");
        } else {
          window.alert("Logged with error");
        }
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          window.alert("Unmatched username & password");
        } else {
          window.alert(error);
        }
      });
  });

// Tenant Profile
export const getTenantInfo = (id) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"), //login放token如local storage，我再取
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
export const getLandlordInfo = (id) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"), //login放token如local storage，我再取
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
export const updateTenantProfile = (id, body) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    console.log(body);
    axios
      .put(`${baseEndpoint}/tenants/${id}`, { body }, apiConfig)
      .then(function (response) {
        console.log("Successfully changed!!");
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          window.alert("exist email");
        } else {
          window.alert(error);
        }
      });
  });

// Update Landlord
export const updateLandlordProfile = (id, body) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    console.log(body);
    axios
      .put(`${baseEndpoint}/tenants/${id}`, { body }, apiConfig)
      .then(function (response) {
        console.log("Successfully changed!!");
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          window.alert("exist email");
        } else {
          window.alert(error);
        }
      });
  });

export const registerTenant = (firstName, lastName, email, password) =>
  new Promise((resolve, reject) => {
    axios
      .post(baseEndpoint + "/register/tenant", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.status === 201) {
          localStorage.setItem("token", response.data.token); //存token 
          localStorage.setItem("tenant", response.data.id);
          // window.location.href = "./tenants/" + response.data.id;
          window.location.href = "./workorders";
          window.alert("Successfully Registered!!");
        } else {
          window.alert("Register with error");
        }
      })
      .catch(function (error) {
        console.log("this is the error: ");
        console.log(error);
        reject(error);
      });
  });

export const registerLandlord = (firstName, lastName, email, password) =>
  new Promise((resolve, reject) => {
    axios
      .post(baseEndpoint + "/register/landlord", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.status === 201) {
          localStorage.setItem("token", response.data.token); //token 
          localStorage.setItem("landlord", response.data.id);
          window.location.href = "./workorders";
          window.alert("Successfully log in!!");
        } else {
          window.alert("Register with error");
        }
      })
      .catch(function (error) {
        console.log("this is the error: ");
        console.log(error);
        reject(error);
      });
  });

// Calls used in the tenantsList component
export const getTenantsByLandlord = (landLordID) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${baseEndpoint}/tenants?landlord=${landLordID}`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });

export const getTenantsByEmail = (email) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${baseEndpoint}/tenants?email=${email}`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });

export const removeTenantAPICall = (id) =>
  new Promise((resolve, reject) => {
    console.log("remove tenant api call");
    console.log(id);
    console.log(`${baseEndpoint}/tenants/${id}/remove`);
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    console.log("apiConfig", apiConfig);
    axios
      .put(`${baseEndpoint}/tenants/${id}/remove`, {}, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        console.log("We have an error");
        alert(x);
        reject(x);
      });
  });

export const assignTenant = (tenantID, landlordID, address) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    axios
      .put(
        `${baseEndpoint}/tenants/${tenantID}/assign`,
        {
          landlord: landlordID,
          address: address,
        },
        apiConfig
      )
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });

export const getWorkOrders = () =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${baseEndpoint}/workorders`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });

export const getWorkOrderById = (id) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${baseEndpoint}/workorders/${id}`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });

export const createPayment = (
  tenant_id,
  amount,
  person_name,
  card_number,
  expiry,
  security_code
) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    axios
      .post(
        baseEndpoint + "/payments",
        {
          tenant_id: tenant_id,
          amount: amount,
          person_name: person_name,
          card_number: card_number,
          expiry: expiry,
          security_code: security_code,
        },
        apiConfig
      )
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });

export const getTenantPayments = (id) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    // payments/tenants/17
    axios
      .get(`${baseEndpoint}/payments/tenants/${id}`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });


  export const getLandlordPayments = (id) =>
  new Promise((resolve, reject) => {
    let apiConfig = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    // payments/tenants/17
    axios
      .get(`${baseEndpoint}/payments/landlords/${id}`, apiConfig)
      .then((x) => resolve(x.data))
      .catch((x) => {
        alert(x);
        reject(x);
      });
  });
 
 
