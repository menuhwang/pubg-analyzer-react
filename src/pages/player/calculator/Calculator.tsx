import React, {useEffect} from "react";
import CalculatorItem from "./CalculatorItem";

interface CalculatorProps {
    display: boolean,
    summary: Summary,
    selectedInit: () => void
}

export type Summary = {
    matches: number,
    kills: number,
    assists: number,
    damageDealt: number,
}

function Calculator(props: CalculatorProps) {
    useEffect(() => {
        console.log('render calculator');
    })
    if (!props.display) return null;
    return (
        <div className="card sticky-md-top top-50 translate-middle-y mb-4 mb-md-0" id="matches-result-calc">
            <div className="card-header">
                <span>합산</span>
                <span className="float-end text-muted" role="button" onClick={props.selectedInit}>초기화</span>
            </div>
            <div className="card-body px-0 py-1">
                <ul className="list-group list-group-flush">
                    <CalculatorItem label={"경기 수"} value={props.summary.matches} />
                    <CalculatorItem label={"킬 합산"} value={props.summary.kills} />
                    <CalculatorItem label={"어시스트 합산"} value={props.summary.assists} />
                    <CalculatorItem label={"공격 포인트"} value={props.summary.kills + props.summary.assists} />
                    <CalculatorItem label={"데미지 합산"} value={props.summary.damageDealt.toFixed(2)} />
                    <CalculatorItem label={"킬 평균"} value={props.summary.matches === 0 ? "0.00" : (props.summary.kills / props.summary.matches).toFixed(2)} />
                    <CalculatorItem label={"어시스트 평균"} value={props.summary.matches === 0 ? "0.00" : (props.summary.assists / props.summary.matches).toFixed(2)} />
                    <CalculatorItem label={"데미지 평균"} value={props.summary.matches === 0 ? "0.00" : (props.summary.damageDealt / props.summary.matches).toFixed(2)} />
                </ul>
            </div>
        </div>
    )
}

export default Calculator;