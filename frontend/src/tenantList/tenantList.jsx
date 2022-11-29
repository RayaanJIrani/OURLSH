import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export const TenantList = () => {
    const params = useParams(); //This is the landlord id that we get from the url
    const [tenants, setTenants] = useState(undefined); //This is the list of tenants that we get from the backend

    return <>
        <h1>Tenant List</h1>
    </>
}