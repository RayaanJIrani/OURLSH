import {useState, useEffect} from "react";
import {Link, NavLink, useParams} from "react-router-dom";
import {getTenants} from "../api/UserApi";
import {EntryBox, EntryTextField, WelcomeHeader} from "../components";
import {removeTenantAPICall, assignTenant} from "../api/UserApi";
import {Nav} from "../nav/nav";
import button from "bootstrap/js/src/button";

const SingleTenant = ({tenant, onClickMethod}) => {
    return (
        <div className="card p-2 mx-3 my-3 d-flex flex-row">
            <h3 className="mx-2">
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

const TenantAddition = ({onClickMethod}) => {
    const [tenantEmail, setTenantEmail] = useState("");
    const [tenantAddress, setTenantAddress] = useState("");

    const handleTenantEmailChange = (event) => {
        setTenantEmail(event.target.value);
    }

    const handleTenantAddressChange = (event) => {
        setTenantAddress(event.target.value);
    }

    return (
        <>
            <h3 className="text-center">Add a Tenant</h3>
            <div className="p-2 mx-3 my-3 d-flex flex-row">
                <input type="text" className="form-control mx-2" placeholder="Email" onChange={handleTenantEmailChange}/>
                <input type="text" className="form-control mx-2" placeholder="Address" onChange={handleTenantAddressChange}/>
                <button type="button" className="btn btn-success text-white rounded text-center align-self-end px-4" onClick={() => onClickMethod(tenantEmail, tenantAddress)}>
                    Add
                </button>
            </div>
        </>
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
            console.log(response);
            renderTenants();
        });
       renderTenants();
    }

    const addTenant = (tenantEmail, address) => {
        console.log("Adding tenant");
        console.log(tenantEmail);
        console.log(address);
        //Gets the tenant id from the email
        let tenantId = 0;
        console.log(tenantId);
        assignTenant(tenantId, address).then((response) => {
            console.log(response);
            renderTenants();
        });
    }


    return <>
        <Nav/>
        <div className="container my-5 bg-white border border-light border-2 rounded">
            <h1 className="text-center border-bottom py-5">Tenant List</h1>
            <div className="row justify-content-center">
                {(!tenants || tenants.length === 0) && <h3 className={"text-center my-5"}>You have no Tenants.</h3>}
                {tenants && tenants.map((tenant) => <SingleTenant key={tenant.id} tenant={tenant} onClickMethod={removeTenant}/>)}
                <TenantAddition onClickMethod={addTenant}/>
            </div>
        </div>
    </>
}

