import React from "react";
import TotalDamageLogTable from "./TotalDamageLogTable";
import {DamageLog} from "../../types/DamageLog";

type TotalDamageProps = {
    matchCreatedAt: string
    damageLog: DamageLog[]
}

function TotalDamage(props: TotalDamageProps) {
    if (props.damageLog === undefined || props.damageLog.length === 0) return null;

    return (
        <div className="row">
            <div className="col">
                <div className="accordion" id="damages-accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="damages-heading">
                            <button className="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#damages-collapse"
                                    aria-expanded="false" aria-controls="damages-collapse">
                                전체 데미지 로그
                            </button>
                        </h2>
                        <div id="damages-collapse" className="accordion-collapse collapse"
                             aria-labelledby="damages-heading"
                             data-bs-parent="#damages-accordion">
                            <div className="accordion-body">
                                <TotalDamageLogTable matchCreatedAt={props.matchCreatedAt} damageLog={props.damageLog} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalDamage;