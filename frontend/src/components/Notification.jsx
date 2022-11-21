//This component is used to display alerts to the user.
//For info about type prop, see https://getbootstrap.com/docs/4.2/components/alerts/
export const Notification = ({message, type}) => {
    console.log("called notification");
    console.log("Notification: " + message);
    return (
        <>
            <div className={"alert alert-" + type + " alert-dismissible fade show text-center"} role="alert">
                <strong>{message}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    );
}
