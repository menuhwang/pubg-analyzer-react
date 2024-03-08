import React from "react";

type RadioButtonProps = {
    group: string,
    id: string,
    value?: string,
    label: string,
    checked?: boolean
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function RadioButton({group, id, value, label, checked, changeHandler}: RadioButtonProps) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name={group} id={id} value={value} onChange={changeHandler} checked={checked}/>
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default RadioButton;