import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Nav} from "../nav/nav";
import {EntryBox, EntryTextField} from "../components";
import { getWorkOrders, getWorkOrderById } from "../api/UserApi";

export const WorkOrder = () => {
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [tenant_id, setTenant_id] = useState("");
    const [landlord_id, setLandlord_id] = useState("");
    const [resolved, setResolved] = useState("");

    const {id} = useParams();

    console.log("id", id);


    //If the value of id is not -1, then this is an existing work order. We need to fetch the data from the server.
    useEffect(() => {
        if(id && id !== -1) {
            console.log("In the useEffect");
            getWorkOrderById(id).then((x) => {
                setDate(x.date);
                setAddress(x.address);
                setDescription(x.description);
                setTenant_id(x.tenant_id);
                setLandlord_id(x.land_id);
                setResolved(x.resolved);
                console.log("x", x);
            });
        }
        }, []);

    return <>
        <Nav />
        <EntryBox title={"Work Order"}>
        </EntryBox>
    </>
}