import React from "react";
import KillDamage from "../components/KillDamage";
import TotalDamage from "../components/TotalDamage";
import PhaseDamageChart from "../components/PhaseDamageChart";
import ContributeDamageChart from "../components/ContributeDamageChart";
import {Analyze} from "../types/Analyze";

type AnalyzeProps = {
    matchCreatedAt: string
    player: string
    member: string[]
    analyze: Analyze
}

function AnalyzeContainer(props: AnalyzeProps) {
    if (props.analyze.damageLog === undefined || props.analyze.damageLog.length === 0) return null;

    return (
        <div className="vstack gap-4">
            {/*!--분석 그래프 --*/}
            <div className="row g-4">
                {/*!-- 페이즈 데미지 차트:원형 차트 --*/}
                <div className="col-md-6">
                    <div className="card mb-4 h-100">
                        <div className="card-header pt-4">
                            <h4 className="card-title fw-bold">페이즈 별 데미지</h4>
                        </div>
                        <div className="card-body py-4">
                            <PhaseDamageChart datasets={props.analyze.charts.phaseDamageChart.datasets} />
                        </div>
                    </div>
                </div>
                {/*!-- 킬 데미지 기여 차트:막대 차트 --*/}
                <div className="col-md-6">
                    <div className="card mb-4 h-100">
                        <div className="card-header pt-4">
                            <h4 className="card-title fw-bold">킬 데미지 기여도</h4>
                        </div>
                        <div className="card-body py-4">
                            <ContributeDamageChart datasets={props.analyze.charts.contributeDamageChart.datasets} labels={props.analyze.charts.contributeDamageChart.labels} />
                        </div>
                    </div>
                </div>
            </div>
            {/*!-- 킬 데미지 분석 아코디언 --*/}
            <KillDamage matchCreatedAt={props.matchCreatedAt}
                        player={props.player}
                        member={props.member}
                        killLog={props.analyze.killLog}
                        victimPlayerDamageDealt={props.analyze.victimPlayerDamageDealt}
                        victimDamageLog={props.analyze.victimDamageLog} />
            {/*!-- 전체 데미지 아코디언 --*/}
            <TotalDamage matchCreatedAt={props.matchCreatedAt} damageLog={props.analyze.damageLog}/>
        </div>
    )
}

export default AnalyzeContainer;