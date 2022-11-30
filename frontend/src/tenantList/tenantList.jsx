import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getTenants} from "../api/UserApi";
import {EntryBox, WelcomeHeader} from "../components";

const SingleTenant = ({tenant}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Tenant ID: {tenant.id}</h5>
                    <h5 className="card-title">First Name: {tenant.first_name}</h5>
                    <h5 className="card-title">Last Name: {tenant.last_name}</h5>
                    <h5 className="card-title">Email: {tenant.email}</h5>
                </div>
            </div>
        </div>
    )
}

const AddTenant = ({landlordId}) => {
}

export const TenantList = () => {
    const params = useParams(); //This is the landlord id that we get from the url
    const [tenants, setTenants] = useState(undefined); //This is the list of tenants that we get from the backend

    useEffect(() => {
        getTenants(params.id).then((response) => {
            setTenants(response.data);
        });
    }, [tenants]);

    console.log(tenants);

    return <>
        <WelcomeHeader/>
        <div className="container my-5 bg-white border border-light border-2 rounded">
            <h2 className="text-center border-bottom py-5">Tenant List</h2>
            <div className="row justify-content-center">
                {!tenants && <h3 className={"text-center my-5"}>You have no Tenants.</h3>}
                {tenants && tenants.map((tenant) => <SingleTenant {...tenant}/>)}

            </div>
        </div>
    </>
}

