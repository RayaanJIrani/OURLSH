//This is a component which creates a way to select between tenant and landlord as the role using radio buttons. It is used in the register page & the login page.
export const RoleRadioSelector = ({handleChangeIdentity}) => {
    return (
        <div
            className="d-flex justify-content-start mb-4"
            onChange={handleChangeIdentity}
        >
            <div className="col-7 ">
                <input
                    className=""
                    type="radio"
                    id="Tenant"
                    name="roleSelector"
                    value="Tenant"
                />
                <label
                    className="custom-control-label fs-4 p-2"
                    htmlFor="html"
                >
                    Tenant
                </label>
            </div>
            <div className="col-7 d-flex">
                <input
                    className=""
                    type="radio"
                    id="Landlord"
                    name="roleSelector"
                    value="Landlord"
                />
                <label
                    className="custom-control-label fs-4  p-2"
                    htmlFor="html"
                >
                    Landlord
                </label>
            </div>
        </div>
    );
}

