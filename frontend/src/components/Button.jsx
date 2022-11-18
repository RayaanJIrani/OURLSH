export const Button = ({handleClick, buttonName = ""}) => {
    return (
        <>
            <div className="mb-3">
                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block col-12 text-center p-2 mx-0"
                    onClick={handleClick}
                >
                    {buttonName}
                </button>
            </div>
        </>
    );
}
