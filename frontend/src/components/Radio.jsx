export const Radio = ({value, onChangeHandler, formLabel = "", options, optionValueKey = "value", optionLabelKey = "value" }) => {
return (
    <>
        <div
            className="d-flex justify-content-start mb-4"
            onChange={onChangeHandler}
        >
            {formLabel !== "" && <label className="form-label">{formLabel}</label>}
            {options.map((option, index) => {
                return (
                    <div className={index > 0 ? "col-7 d-flex" : "col-7"}>
                        <input
                            className=""
                            type="radio"
                            id={option[optionValueKey]}
                            name={option[optionValueKey]}
                            value={option[optionValueKey]}
                        />
                        <label
                            className="custom-control-label fs-4  p-2"
                            htmlFor="html"
                        >
                            {option[optionLabelKey]}
                        </label>
                    </div>
                )
            }
            )}
        </div>
    </>
  );
}
