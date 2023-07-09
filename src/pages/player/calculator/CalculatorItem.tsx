import React from "react";

type CalculatorItemProps = {
    label: string,
    value: number | string
}

function CalculatorItem(props: CalculatorItemProps) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div>{props.label}</div>
            <div>{props.value}</div>
        </li>
    )
}

export default CalculatorItem;