export const EntryTextField = ({placeholder = "", fieldValue, fieldOnChange}) => {
    return (
        <div className="form-outline mb-4">
            <input
                type="text"
                className="form-control form-control-lg p-3 fs-4"
                placeholder={placeholder}
                value={fieldValue}
                onChange={fieldOnChange}
            />
        </div>
    );
}
