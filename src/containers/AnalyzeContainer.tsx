import React, {useContext} from "react";
import KillDamage from "../components/KillDamage";
import TotalDamage from "../components/TotalDamage";
import PhaseDamageChart from "../components/PhaseDamageChart";
import ContributeDamageChart from "../components/ContributeDamageChart";
import {KillLogsContext} from "../contexts/KillLogsContextProvider";
import {AllOwnDamageContext} from "../contexts/AllOwnDamageContextProvider";
import WeaponAccuracyChart from "../components/WeaponAccuracyChart";

type AnalyzeProps = {
    matchId: string | undefined,
    playerName: string | undefined,
}

function AnalyzeContainer(props: AnalyzeProps) {
    const killLogs = useContext(KillLogsContext);
    const ownDamageLogs = useContext(AllOwnDamageContext);

    if (props.matchId === undefined
        || props.playerName === undefined
        || killLogs === null
        || ownDamageLogs === null) {
        return null;
    }

    if (killLogs.length === 0 && ownDamageLogs.length === 0) return null;

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
                            <PhaseDamageChart matchId={props.matchId} playerName={props.playerName} />
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
                            <ContributeDamageChart matchId={props.matchId} playerName={props.playerName} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/*무기 정확도 그래프*/}
                <div className="col">
                    <div className="card mb-4 h-100">
                        <div className="card-header pt-4">
                            <h4 className="card-title fw-bold">무기 정확도</h4>
                        </div>
                        <div className="card-body py-4">
                            <WeaponAccuracyChart matchId={props.matchId} playerName={props.playerName} />
                        </div>
                    </div>
                </div>
            </div>
            {/*!-- 킬 데미지 분석 아코디언 --*/}
            <KillDamage matchId={props.matchId} playerName={props.playerName} />
            {/*!-- 전체 데미지 아코디언 --*/}
            <TotalDamage />
        </div>
    )
}

export default AnalyzeContainer;