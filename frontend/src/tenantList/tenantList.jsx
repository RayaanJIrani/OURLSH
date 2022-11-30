import {useState, useEffect} from "react";
import {Link, NavLink, useParams} from "react-router-dom";
import {getTenants} from "../api/UserApi";
import {EntryBox, WelcomeHeader} from "../components";
import {removeTenantAPICall} from "../api/UserApi";
import {Nav} from "../nav/nav";
import button from "bootstrap/js/src/button";

const SingleTenant = ({tenant, onClickMethod}) => {
    return (
        <div className="card p-2 mx-3 my-3 d-flex flex-row">
            <h3 className="card-title mx-2">
                <NavLink to={`/tenants/${tenant.id}`} className={"text-decoration-none text-black"}>
                    {tenant.first_name + " " + tenant.last_name}
                </NavLink>
            </h3>
            <button type="button" className="btn btn-danger text-white rounded text-center align-self-end" onClick={() => onClickMethod(tenant.id)}>
                Remove
            </button>
        </div>
    )
}

export const TenantList = () => {
    const params = useParams(); //This is the landlord id that we get from the url
    const [tenants, setTenants] = useState(undefined); //This is the list of tenants that we get from the backend

    useEffect(() => {
        getTenants(params.id).then((response) => {
            setTenants(response);
        });
        console.log(tenants);
    }, []);

    const renderTenants = () => {
        console.log("Rendering tenants");
        getTenants(params.id).then((response) => {
            setTenants(response);
        });
    }

    const removeTenant = (tenantId) => {
        console.log("Removing tenant");
        console.log(tenantId);
        removeTenantAPICall(tenantId).then((response) => {

        });
       renderTenants();
    }

    const addTenant = (tenantEmail, address) => {
        console.log("Adding tenant");
        console.log(tenantEmail);
        console.log(address);

    }


    return <>
        <Nav/>
        <div className="container my-5 bg-white border border-light border-2 rounded">
            <h1 className="text-center border-bottom py-5">Tenant List</h1>
            <div className="row justify-content-center">
                {(!tenants || tenants.length === 0) && <h3 className={"text-center my-5"}>You have no Tenants.</h3>}
                {tenants && tenants.map((tenant) => <SingleTenant key={tenant.id} tenant={tenant} onClickMethod={removeTenant}/>)}
            </div>
        </div>
    </>
}

