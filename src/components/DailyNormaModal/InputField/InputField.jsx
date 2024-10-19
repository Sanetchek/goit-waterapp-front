import React from "react";
import css from "./InputField.module.css"

const InputField = ({label, value, setValue,}) => {
    return (
        <div className={css.wrapper}>
            <label className={css.label}>{label}
            <input className={css.input} type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                </label>
        </div>
    )
};

export default InputField;