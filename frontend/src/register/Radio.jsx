import * as React from 'react';

export function RadioInputHandlerHorizontal({value, setValue, formLabel = "", options, optionValueKey = "value", optionLabelKey = "label"}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className="form-group mb-3">
                {formLabel !== "" && <span className="">{formLabel}</span>}
               <div className="form-check form-check-inline">
                   {options.map((option, index) =>
                          <label key={index} className="form-check-label">
                                <input type="radio"
                                        name="value"
                                        id="value"
                                        value={optionValueKey ? option[optionValueKey] : option}
                                        checked={value === (optionValueKey ? option[optionValueKey] : option)}
                                        onChange={handleChange}
                                        className="form-check-input me-2" />
                                {optionLabelKey ? option[optionLabelKey] : optionValueKey ? option[optionValueKey] : option}
                            </label>
                     )}
               </div>
            </div>
        </>
    );
}

/*
<div className="Radio">
    <input type="radio"
           id="Tenant"
           name="fav_language"
    />{" "}
    <label htmlFor="html">Tenant</label>
    <br></br>
    <input type="radio" id="Landload" name="fav_language" />{" "}
    <label htmlFor="html">Landload</label>
    <br></br>
</div>
 */

/*
<FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">User Type</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
    >
        { options.map((option, index) =>
            <FormControlLabel
                key={index}
                value={optionValueKey ? option[optionValueKey] : option}
                control={<Radio />}
                label={optionLabelKey ? option[optionLabelKey] : optionValueKey ? option[optionValueKey] : option}
            />
        )}
    </RadioGroup>
</FormControl>
    */