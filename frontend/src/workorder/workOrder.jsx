import {useState} from "react";
import {useParams} from "react-router-dom";

export const WorkOrder = () => {
    const [property, setProperty] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");

    const {id} = useParams();

    //If the value of id is not -1, then this is an existing work order. We need to fetch the data from the server.
    if(id && id !== -1) {

    }

    return <>
        <h1>Work Order</h1>
    </>
}