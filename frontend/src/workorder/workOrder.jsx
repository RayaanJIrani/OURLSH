import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Nav} from "../nav/nav";
import {EntryBox, EntryTextField, TextField} from "../components";
import {getWorkOrders, getWorkOrderById, createWorkOrder, updateWorkOrder} from "../api/UserApi";

export const WorkOrder = () => {
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [tenant_id, setTenant_id] = useState("");
    const [landlord_id, setLandlord_id] = useState("");
    const [resolved, setResolved] = useState("");


    const {id} = useParams();

    console.log("id", id);

    const navigate = useNavigate();


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


    console.log("date", date);
    console.log("address", address);
    console.log("description", description);
    console.log("tenant_id", tenant_id);
    console.log("landlord_id", landlord_id);
    console.log("resolved", resolved);

    return <>
        <Nav />
        <EntryBox title={"Work Order"}>
            <div className ="text-start">
            <p> Date: {date} </p>
            <p> Address: {address} </p>
            <TextField label={"Description"} value={description} setValue={setDescription} />
            <TextField label={"Tenant ID"} value={tenant_id}  setValue={setTenant_id} />
            <p> Landlord ID: {landlord_id} </p>
            <TextField label={"Resolved"} value={resolved} setValue={setResolved} />
                <button
                    type="button"
                    className="btn btn-secondary mx-0"
                    onClick={() => {
                        if (id && id !== -1) {
                            updateWorkOrder(id, address, description, tenant_id, landlord_id, resolved).then((x) => {
                                console.log("x", x);
                            });
                        } else if(id === -1) {
                            console.log("In the else");
                            createWorkOrder(address, description, tenant_id, landlord_id, resolved).then((x) => {
                                console.log("x", x);
                                navigate(`/workorderlists/${x.wo_num}`);
                            });
                        }
                    }}
                >
                    Save
                </button>
            </div>
        </EntryBox>
    </>
}