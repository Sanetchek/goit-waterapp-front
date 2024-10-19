import React from "react";
import css from "./InputResult.module.css"

const InputResult = ({value, setValue,}) => {
    return (
        <div className={css.wrapper}>
            <label className={css.label}>Write down how much water you will drink:
            <input className={css.input} type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                </label>
        </div>
    )
};

export default InputResult;