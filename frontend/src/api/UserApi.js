import axios from 'axios';

const baseEndpoint='http://localhost:8000';

export const getUserInfo = (id) =>new Promise((resolve,reject)=>{
    // var myToken=localStorage.getItem('token');
    let apiConfig={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
      };
    //window.alert(localStorage.token);
    axios.get(`${baseEndpoint}/tenant/${id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
    });
});
