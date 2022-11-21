//This component is used to display notifications to the user.

export const Notification = ({ message, type }) => {
    return (
        <div className={`notification ${type}`}>
        {message}
        </div>
    );
}